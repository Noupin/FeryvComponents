//Third Party Imports
import React from 'react'
import { Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  expression: boolean
  children: React.ReactNode
  unauthorizedRedirect?: string
}

export function ProtectedRoute ({expression, children,
  unauthorizedRedirect='http://auth.feryv.com/login', ...rest }: IProtectedRoute) {

  return (
    <Route {...rest} render={() => {
      return expression ?
        children : window.location.href = `${unauthorizedRedirect}${rest.path}`
    }} />
  )
}
