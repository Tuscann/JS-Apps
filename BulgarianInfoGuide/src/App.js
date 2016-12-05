import React, { Component } from 'react';
import Header from './components/common/Header';
import {Link} from 'react-router';
import './App.css';
import observer from './models/observer';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn: false,
            cityName: "",
            username: ""
        }
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount(){
        observer.onSessionUpdate = this.onSessionUpdate;
        this.checkUserCredentials();
    }

    onSessionUpdate(){
        console.log('Rechecking session credentials...');
        this.checkUserCredentials();
    }
    checkUserCredentials(){
        let username= sessionStorage.getItem('username');
        if(!username){
            this.setState({
                loggedIn: false
            })
        } else{
            this.setState({
                loggedIn: true,
                username: username
            })
        }
    }



    render() {
        if(this.state.loggedIn){
            return(
                <div className="container">
                    <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                        <Link to="/" className="btn btn-default">Home</Link>
                        <Link to="/about" className="btn btn-default">About</Link>
                        <Link to="/wonders" className="btn btn-default">Wonders</Link>
                        <Link to="/logout" className="btn btn-default">Logout</Link>
                    </Header>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div className="container">
                <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/about" className="btn btn-default">About</Link>
                    <Link to="/register" className="btn btn-default">Register</Link>
                    <Link to="/login" className="btn btn-default">Login</Link>
                </Header>
                {this.props.children}
            </div>
        );
    }
}

export default App;