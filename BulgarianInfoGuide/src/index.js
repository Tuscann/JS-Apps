import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import TownWonders from './components/townWonders/TownWondersPage';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import Register from './components/register/RegisterPage';
import Login from './components/login/LoginPage';
import Logout from './components/logout/LogoutPage';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="townWonders" component={TownWonders}/>
          <Route path="about" component={About}/>
          <Route path="register" component={Register}/>
          <Route path="login" component={Login}/>
          <Route path="logout" component={Logout}/>
      </Route>
  </Router>,
    document.getElementById('root')
);
