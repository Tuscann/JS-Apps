import React, {Component} from 'react';
import {loadWonderDetails} from '../../models/city';
import './Wonder.css';

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
        
        if(sessionStorage.getItem('username')){
            return (
                <div className="details-box">
                    <h3 className="titlename">{this.state.wonder.name}</h3>
                    <img src = {this.state.wonder.image} className="image"></img>
                    <div>{this.state.wonder.description || 'Няма описание'}</div>
                </div>
            )
        } else{
            return (<div>Трябва да влезете в сайта, Моля използвайте Вход бутона</div>);
        }
        
    }
}

