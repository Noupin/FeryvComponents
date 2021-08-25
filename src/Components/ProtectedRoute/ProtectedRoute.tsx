//Third Party Imports
import React, { useEffect, FC } from 'react'
import { Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  RouteInstance: any
  condition: boolean
  unauthorizedRedirect?: string
  encodedRedirectURI?: string
}

export const ProtectedRoute: FC<IProtectedRoute> = ({condition,
  unauthorizedRedirect='http://auth.feryv.com/login', RouteInstance,
  encodedRedirectURI='', children, ...rest}: IProtectedRoute) => {

  useEffect(() => {
    if(!condition){
      window.location.assign(`${unauthorizedRedirect}${encodedRedirectURI}`)
    }
  }, [condition])

  return (
    <RouteInstance {...rest}>
      {children}
    </RouteInstance>
  )
}
