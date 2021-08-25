//Third Party Imports
import React from 'react'
import { FC } from 'react';
import { BrowserRouter as Router,
  Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  condition: boolean
  unauthorizedRedirect?: string
  encodedRedirectURI?: string
}

export const ProtectedRoute: FC<IProtectedRoute> = ({condition,
  unauthorizedRedirect='http://auth.feryv.com/login', 
  encodedRedirectURI='', children, ...rest}: IProtectedRoute) => {

  if(!condition){
    window.location.assign(`${unauthorizedRedirect}${encodedRedirectURI}`)
  }

  return (
    <Router>
      <Route {...rest}>
        {children}
      </Route>
    </Router>
  )
}
