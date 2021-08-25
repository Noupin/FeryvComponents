//Third Party Imports
import React, { useEffect, FC } from 'react'
import { Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  condition: boolean
  unauthorizedRedirect?: string
  encodedRedirectURI?: string
}

export const ProtectedRoute: FC<IProtectedRoute> = ({condition,
  unauthorizedRedirect='http://auth.feryv.com/login', 
  encodedRedirectURI='', children, ...rest}: IProtectedRoute) => {

  useEffect(() => {
    if(!condition){
      window.location.assign(`${unauthorizedRedirect}${encodedRedirectURI}`)
    }
  }, [])

  return (
    <Route {...rest}>
      {children}
    </Route>
  )
}
