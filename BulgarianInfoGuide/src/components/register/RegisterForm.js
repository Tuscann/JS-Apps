import React, {Component} from 'react';
import './Register.css';

export default class RegisterForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>
                        Потребителско име:
                    </label>
                    <input type="text" name="username"
                           value={this.props.username}
                           onChange={this.props.onChange}
                           className="form-control"
                           disabled={this.props.inputDisabled}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Парола:
                    </label>
                    <input type="password" name="password"
                           value={this.props.password}
                           onChange={this.props.onChange}
                           className="form-control"
                           disabled={this.props.inputDisabled}/>
                </div>
                <div className="form-group">
                    <label>
                        Повтори паролата:
                    </label>
                    <input type="password" name="repeat"
                           value={this.props.repeat}
                           onChange={this.props.onChange}
                           className="form-control"
                           disabled={this.props.inputDisabled}/>
                </div>
                <input type="submit" value="Регистрация"
                       className="btn-btn-default"
                       disabled={this.props.inputDisabled}/>
            </form>
        );
    }
}

