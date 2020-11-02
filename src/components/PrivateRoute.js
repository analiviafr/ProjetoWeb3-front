import React from 'react';
import {isAuthenticated} from './auth';
//import {isAdm} from './auth';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to = {{pathname: '/', state: {from:props.location}}} />
      )
    }
  />
);

/*function PrivateRouteAdm({
  if (localStorage.getItem('app-token:role') === 'admin') return <Redirect to={{pathname: '/', state: {from:props.location}}} />;
  return <Route {...rest} render={props => <Component {...props} />} />;
});*/

export default PrivateRoute
//export default PrivateRouteAdm
