import React, {Component} from 'react';
import CreateForm from './CreateForm';
import {create} from '../../models/city';
import observer from '../../models/observer';


export default class CreatePage extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            description: '',
            image: '',
            inputDisabled: true
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onCreateSuccess = this.onCreateSuccess.bind(this);
    }

    onChangeHandler(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        if(event.target.name ==="name"){
            if(this.state.name.length < 3){
                newState.inputDisabled = true;
            }else{
                newState.inputDisabled = false;
            }
        }
        this.setState(newState);
    }

    onSubmitHandler(event){
        event.preventDefault();
        if(this.state.name.length<3){
            alert("Name of Wonders must be at least 3 symbols")
        }
        create(this.state.cityName,
            this.state.name,
            this.state.description,
            this.state.image,
            this.onCreateSuccess)

    }

    onCreateSuccess(result){
        this.context.route.push("/"+this.state.cityName+"/Wonders");
    }

    render(){
        return(
            <div>
               <h1>Create Page</h1>
                <CreateForm
                    name={this.state.name}
                    description={this.state.description}
                    image={this.state.image}
                    disabled={this.state.inputDisabled}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        );
    }
}


CreatePage.contextTypes = {
    router: React.PropTypes.object
};

