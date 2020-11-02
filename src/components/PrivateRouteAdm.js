import React from 'react';
//import {isAdm} from './auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteAdm = ({component: Component, ...rest}) => (
  const isAdm;
  if (localStorage.getItem('app-token:role') === 'admin') {
    isAdm = 'admin';
  }
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
);

export default PrivateRouteAdm
