import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn 
        ? 
        (<Component {...props} />) 
        : 
        (<Redirect to={{pathname: "/login", state: { from: props.location }}}/>)
      }
    />
  )
    
}

export default PrivateRoute;