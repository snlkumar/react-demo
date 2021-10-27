import React from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router-dom'
import APP_ROUTES from '../config/app.routes'
import AuthService from '../services/AuthService'

const PublicRoute = ({component: Component, ...rest}) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route
    {...rest}
    render={(props) =>
      AuthService.isUserLoggedIn() ? (
        <Redirect to={APP_ROUTES.HOMEPAGE} />
      ) : (
        <Component {...props} />
      )
    }
  />
)

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
}

export default PublicRoute
