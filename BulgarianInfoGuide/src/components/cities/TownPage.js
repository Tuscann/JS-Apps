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
        let area='';
        let population='';
        let geography='';
        let history='';
        let cityId='';
        let cityName='';
        let cityUrl='';
        for(let city of this.state.cities){
            if(city.name === this.props.params.town){
                area = city.area;
                population = city.population;
                geography = city.geography;
                history = city.history;
                city._id = city.cityId;
            }
        }

        switch(this.props.params.town){
            case "Pleven": cityName="Плевен"; cityUrl= 'https://www.dpfzd.com/wp-content/uploads/2016/06/07_pleven.jpg'; break;
            case "Plovdiv": cityName="Пловдив"; cityUrl= 'http://www.plovdiv.bg/wp-content/uploads/2016/01/rimski_stadion.jpg'; break;
            case "Sofia": cityName="София"; cityUrl='http://www.planettours.bg/images/Bg_info/bulgaria2.jpg'; break;
            case "Varna": cityName="Варна"; cityUrl='http://bulgariatravel.org/data/media/215_009_Varna_grad.jpg.jpg'; break;
            case "Provadia": cityName="Провадия"; cityUrl='http://provadiadnes.com/images/advertisements/413787_174393662665407_100002843236180_221497_1032631307_o.jpg'; break;
            case "Bourgas": cityName="Бургас"; cityUrl='http://www.razkritia.com/wp-content/uploads/2014/03/burgas2.jpg'; break;
            case "Vidin": cityName="Видин"; cityUrl='http://www.rs-vidin.com/uploads/posts/2011-02/1297936074_otvyn_2.jpg'; break;
            case "Russe": cityName="Русе"; cityUrl='https://upload.wikimedia.org/wikipedia/commons/1/19/Rousse_Monument_of_Liberty_Palm_trees.jpg';break;
        }

        
        return(<div className="town-forms">
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
    }
}

