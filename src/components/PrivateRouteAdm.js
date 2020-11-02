import React from 'react';
//import {isAdm} from './auth';
import { Route, Redirect } from 'react-router-dom';


function isAdm ({
  role = localStorage.getItem('app-token:role');
  if (role === 'admin') {
    return role;
)};

const PrivateRouteAdm = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAdm() ? (
        <Component {...props} />
      ) : (
        <Redirect to = {{pathname: '/searchadm', state: {from:props.location}}} />
      )
    }
  />
);*/

/*const isAdm;
if (localStorage.getItem('app-token:role') === 'admin') {
  isAdm = 'admin';
}

const PrivateRouteAdm = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAdm() ? (
        <Component {...props} />
      ) : (
        <Redirect to = {{pathname: '/searchadm', state: {from:props.location}}} />
      )
    }
  />
);*/

export default PrivateRouteAdm
