//Third Party Imports
import React from 'react'
import { BrowserRouter as Router,
  Route, RouteProps } from 'react-router-dom';


interface IProtectedRoute extends RouteProps {
  condition: boolean
  children: React.ReactNode
  unauthorizedRedirect?: string
  encodedRedirectURI?: string
}

export function ProtectedRoute ({condition, children,
  unauthorizedRedirect='http://auth.feryv.com/login', 
  encodedRedirectURI='', ...rest }: IProtectedRoute) {

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
