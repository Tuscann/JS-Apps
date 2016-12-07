import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadWonderDetails, edit} from '../../models/city';
import './Edit.css';

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            submitDisabled: true};
        this.bindEventHandlers();
    }

    componentDidMount() {
        // Populate form
        let cityName = this.props.params.town.toLowerCase();
        loadWonderDetails(cityName, this.props.params.wonderId, this.onLoadSuccess);
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({
            name: response.name,
            description: response.description,
            image: response.image,
            submitDisabled: false
        });
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
        let cityName = this.props.params.town.toLowerCase();
        let wonderId = this.props.params.wonderId;
        edit(cityName, wonderId, this.state.name, this.state.description, this.state.image, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            let path = '/'+ this.props.params.town + "/wonders";
            this.context.router.push(path);
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }

    render() {
        if(sessionStorage.getItem('username')) {
            let cityNamee = '';
            switch (this.props.params.town) {
                case "Pleven":
                    cityNamee = "Плевен";
                    break;
                case "Plovdiv":
                    cityNamee = "Пловдив";
                    break;
                case "Sofia":
                    cityNamee = "София";
                    break;
                case "Varna":
                    cityNamee = "Варна";
                    break;
                case "Provadia":
                    cityNamee = "Провадия";
                    break;
                case "Bourgas":
                    cityNamee = "Бургас";
                    break;
                case "Vidin":
                    cityNamee = "Видин";
                    break;
                case "Russe":
                    cityNamee = "Русе";
                    break;
            }

            return (
                <div className="all-forms">
                    <h3>Промени забележителност към град {cityNamee}</h3>
                    <EditForm
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

EditPage.contextTypes = {
    router: React.PropTypes.object
};