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
                <span>Name of Wonder</span>
                <span className="titlebar">{this.state.wonder.name}</span>
                <span className="spanner">Description</span>
                <p>{this.state.wonder.description || 'No description'}</p>
                <span className="spanner"> Image:</span>
                <span className="spanner">{this.state.wonder.image}</span>
            </div>
        )
    }
}

