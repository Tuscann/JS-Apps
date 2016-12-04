import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../models/user';
import observer from '../../models/observer';


export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            inputDisabled: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    onChangeHandler(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event){
        event.preventDefault();
        this.setState({
            inputDisabled: true
        });
        login(this.state.username, this.state.password,this.onLoginSuccess);

    }

    onLoginSuccess(result){
        this.setState({
            inputDisabled: false
        });

        if(result) {
            observer.onSessionUpdate();
            this.context.router.push("/");
        }
    }

    render(){
        return(
            <div>
               <h1>Login Page</h1>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    disabled={this.state.inputDisabled}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};

