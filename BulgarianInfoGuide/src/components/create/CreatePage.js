import React, {Component} from 'react';
import CreateForm from '../create/CreateForm';
import {create} from '../../models/city';
import './Create.css';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image:'',
            submitDisabled: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }
    

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        let cityName=this.props.params.town.toLowerCase();
        create(cityName, this.state.name, this.state.description, this.state.image, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            let path='/'+this.props.params.town + '/wonders';
            this.context.router.push(path);
        }
    }

    render() {
        if(sessionStorage.getItem('username')) {
            let cityName = '';
            switch (this.props.params.town) {
                case "Pleven":
                    cityName = "Плевен";
                    break;
                case "Plovdiv":
                    cityName = "Пловдив";
                    break;
                case "Sofia":
                    cityName = "София";
                    break;
                case "Varna":
                    cityName = "Варна";
                    break;
                case "Provadia":
                    cityName = "Провадия";
                    break;
                case "Bourgas":
                    cityName = "Бургас";
                    break;
                case "Vidin":
                    cityName = "Видин";
                    break;
                case "Russe":
                    cityName = "Русе";
                    break;
            }

            return (
                <div className="all-forms">
                    <h3>Добави забележителност към град {cityName}</h3>
                    <CreateForm
                        name={this.state.name}
                        description={this.state.description}
                        image={this.state.image}
                        submitDisabled={this.state.submitDisabled}
                        onChangeHandler={this.onChangeHandler}
                        onSubmitHandler={this.onSubmitHandler}
                    />
                </div>
            );
        }else{
            return (<div>Трябва да влезете в сайта, Моля използвайте Вход бутона</div>);
        }
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};
