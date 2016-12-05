import React, {Component} from 'react';
import {loadCities} from '../../models/city';

export default class VarnaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'varna',
            cities: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({cities: response});
    }

    componentDidMount() {
        loadCities(this.onLoadSuccess);
    }


    render() {
        let area = '';
        let population = '';
        let geography = '';
        let history = '';
        let cityId = '';
        for (let city of this.state.cities) {
            if (city.name === 'Varna') {
                area = city.area;
                population = city.population;
                geography = city.geography;
                history = city.history;
                city._id = city.cityId;
            }
        }


        return (<div>
                <h2>Varna info</h2>
                <h4>Area:</h4>
                <div>{area}</div>
                <h4>Population:</h4>
                <div>{population}</div>
                <h4>Geography:</h4>
                <div>{geography}</div>
                <h4>History:</h4>
                <div>{history}</div>
            </div>
        );
    }
}
