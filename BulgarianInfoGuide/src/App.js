import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {Link} from 'react-router';
import './App.css';
import observer from './models/observer';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn: false,
            username: ""
        };
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
            if(this.props.params.town){
                return (
                    <div>
                        <div className="container">
                            <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                            <Link to="/" className="btn btn-default">Начало</Link>
                            <Link to={'/'+this.props.params.town + "/wonders"} className="btn btn-default">Забележителности</Link>
                            <Link to={'/'+this.props.params.town + "/create"} className="btn btn-default">Създай</Link>
                            <Link to="/about" className="btn btn-default">За нас</Link>
                            <Link to="/logout" className="btn btn-default">Изход</Link>
                            </Header>
                            {this.props.children}
                        </div>
                        <Footer className="footer"/>
                    </div>
                );
            }else{
                return (
                    <div>
                    <div className="container">
                        <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                            <Link to="/" className="btn btn-default">Начало</Link>
                            <Link to="/about" className="btn btn-default">За нас</Link>
                            <Link to="/logout" className="btn btn-default">Изход</Link>
                        </Header>
                        {this.props.children}
                    </div>
                        <Footer className="footer"/>
                    </div>
                );
            }

        }
        return (
            <div className="container">
                <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                    <Link to="/" className="btn btn-default">Начало</Link>
                    <Link to="/about" className="btn btn-default">За нас</Link>
                    <Link to="/register" className="btn btn-default">Регистрация</Link>
                    <Link to="/login" className="btn btn-default">Вход</Link>
                </Header>
                {this.props.children}
                <Footer className="footer"/>
            </div>
        );
    }
}

export default App;