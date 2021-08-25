//Third Party Imports
import React from 'react'
import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  condition: boolean
  unauthorizedRedirect?: string
  encodedRedirectURI?: string
}

export const ProtectedRoute: FC<IProtectedRoute> = ({condition,
  unauthorizedRedirect='http://auth.feryv.com/login', path,
  encodedRedirectURI='', children, ...rest}: IProtectedRoute) => {

  if(!condition){
    window.location.assign(`${unauthorizedRedirect}${encodedRedirectURI}`)
  }

  return (
    <Route path={path} {...rest}>
      {children}
    </Route>
  )
}
