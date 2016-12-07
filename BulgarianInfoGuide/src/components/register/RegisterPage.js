import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';
import observer from '../../models/observer';
import './Register.css';


export default class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            repeat: "",
            inputDisabled: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
    }

    onChangeHandler(event){
        event.preventDefault();
        this.setState({
            inputDisabled: true
        });
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event){
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            this.setState({
                inputDisabled: false
            });
            alert("Passwords don't match");
            return;
        }
        
        register(this.state.username, this.state.password,this.onRegisterSuccess);

    }

    onRegisterSuccess(result){
        this.setState({
            inputDisabled: false
        });
        observer.onSessionUpdate();
        this.context.router.push("/")
    }

    render(){
        return(
            <div className="all-forms">
               <h3>Регистрация</h3>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    disabled={this.state.inputDisabled}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        );
    }
}


RegisterPage.contextTypes = {
    router: React.PropTypes.object
};

