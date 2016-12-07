import React, {Component} from 'react';
import {loadCities} from '../../models/city';
import './TownPage.css';

export default class TownPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            cities: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response){
        this.setState({cities: response});
    }

    componentDidMount(){
        loadCities(this.onLoadSuccess);
    }


    render(){
        if(sessionStorage.getItem('username')) {
            let area = '';
            let population = '';
            let geography = '';
            let history = '';
            let cityId = '';
            let cityName = '';
            let cityUrl = '';
            for (let city of this.state.cities) {
                if (city.name === this.props.params.town) {
                    area = city.area;
                    population = city.population;
                    geography = city.geography;
                    history = city.history;
                    city._id = city.cityId;
                    cityUrl = city.image;
                }
            }

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


            return (<div className="town-forms">
                    <h2 className="town-title">{cityName}</h2>
                    <img src={cityUrl} className="image"></img>
                    <div className="town-params-name">
                        <h4>Площ:</h4>
                        <div>{area} кв.км.</div>
                        <h4 >Население:</h4>
                        <div>{population}</div>
                        <h4>География:</h4>
                        <div>{geography}</div>
                        <h4>История:</h4>
                        <div>{history}</div>
                    </div>
                </div>
            );
        } else{
            return (
                <div>Трябва да влезете в сайта, Моля използвайте Вход бутона.</div>
            )
        }
    }
}

