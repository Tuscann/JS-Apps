import React, {Component} from 'react';
import CreateForm from '../create/CreateForm';
import {create} from '../../models/city';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', description: '', image:'', submitDisabled: false};

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
            this.context.router.push('/');
        }
    }

    render() {
        return (
            <div>
                <h1>Create Wonder in {this.props.params.town}</h1>
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
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};
