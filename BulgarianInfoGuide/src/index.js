import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Wonders from './components/wonders/WonderPage';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import Register from './components/register/RegisterPage';
import Login from './components/login/LoginPage';
import Logout from './components/logout/LogoutPage';
import Town from './components/cities/TownPage';
import WonderDetail from './components/wonders/WonderDetail';
import Create from './components/create/CreatePage';
import Edit from './components/edit/EditPage';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <IndexRoute component={Home}/>
            <Route path=":town" >
                <IndexRoute component={Town}/>
                <Route path="wonders">
                    <IndexRoute component={Wonders}/>
                    <Route path=":wonderId">
                        <IndexRoute component={WonderDetail}/>
                        <Route path="edit" component={Edit}/>
                    </Route>
                </Route>
                <Route path="create">
                    <IndexRoute component={Create}/>
                </Route>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);