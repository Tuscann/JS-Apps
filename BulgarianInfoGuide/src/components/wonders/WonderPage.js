import React, {Component} from 'react';
import {loadCityWonders} from '../../models/city';
import Wonder from './Wonder';
import './Wonder.css';

export default class WondersPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            wonders: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response){
        this.setState({wonders: response});
    }

    componentDidMount(){
        let cityName= this.props.params.town.toLowerCase();
        loadCityWonders(cityName, this.onLoadSuccess);
    }


    render(){
        if(sessionStorage.getItem('username')) {
            return (<div className="wonder-forms">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Име</th>
                            <th>Описание</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.wonders.map((e, i) => {
                            return <Wonder key={i} name={e.name}
                                           id={e._id}
                                           description={e.description}
                                           userCreator={e._acl.creator}
                                           cityName={this.props.params.town}
                            />
                        })}
                        </tbody>
                    </table>
                </div>
            );
        } else{
            return(
            <div>Трябва да влезете в сайта, Моля използвайте Вход бутона</div>
            );
        }
    }
}
