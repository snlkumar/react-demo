import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import APP_ROUTES from '../config/app.routes'
import AuthService from '../services/AuthService'

const PrivateRoute = ({component: Component, ...rest}) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      AuthService.isUserLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to={APP_ROUTES.LOGINPAGE} />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default PrivateRoute
