//Third Party Imports
import React from 'react'
import { Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  expression: boolean
  children: React.ReactNode
  unauthorizedRedirect: string
}

export function ProtectedRoute ({expression, children,
  unauthorizedRedirect='http://auth.feryv.com/login', ...rest }: IProtectedRoute) {
  if(!expression){
    window.location.href = unauthorizedRedirect
  }

  return (
    <Route {...rest} render={() => (children)} />
  )
}
