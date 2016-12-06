import React, {Component} from 'react';
import {loadWonderDetails} from '../../models/city';

export default class WonderDetail extends Component {
    constructor(props) {
        super(props);
        this.state ={
           wonder:[]
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        let cityName=this.props.params.town.toLowerCase();
        let wonderId=this.props.params.wonderId;
        loadWonderDetails(cityName, wonderId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({wonder: response});
    }


    render() {
        return (
            <div className="details-box">
                <img src = {this.state.wonder.image} className="image"></img>
                <h3 className="titlebar">{this.state.wonder.name}</h3>
                <p>{this.state.wonder.description || 'No description'}</p>

            </div>
        )
    }
}

