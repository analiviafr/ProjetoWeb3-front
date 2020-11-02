import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import IpRegister from '../pages/ip_register';
import SearchUser from '../pages/search_user';
import SearchAdm from '../pages/search_adm';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PrivateRouteAdm from './PrivateRoute';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <PrivateRoute path="/search" component={SearchUser}/>
      <PrivateRouteAdm path="/searchadm" component={SearchAdm}/>
      <PrivateRoute path="/ipregister" component={IpRegister}/>
      <Route exact path="/" component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </HashRouter>
)

export default Routes;
