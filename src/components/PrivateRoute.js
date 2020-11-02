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

function PrivateRouteAdm({
  if (localStorage.getItem('app-token:role') === 'admin') return <Redirect to={{pathname: '/searchadm', state: {from:props.location}}} />;
  return <Route {...rest} render={props => <Component {...props} />} />;
});

/*const PrivateRouteAdm = ({component: Component, ...rest}) => (
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


/*props => {
  const isLogged = !!localStorage.getItem('app-token')
  return isLogged ? <Route {...props}/> : <Redirect to="/"/>
}*/

export default PrivateRoute
export default PrivateRouteAdm
