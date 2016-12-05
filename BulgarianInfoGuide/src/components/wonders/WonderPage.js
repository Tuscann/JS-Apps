import React, {Component} from 'react';
import {loadCityWonders} from '../../models/city';
import Wonder from './Wonder';

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
         return(<div>
            <table className="table .table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.wonders.map((e, i) => {
                    return <Wonder key={i} name={e.name} id={e._id} description={e.description} userCreator={e._acl.creator} cityName={this.props.params.town}/>
                })}
                </tbody>
             </table>
             </div>
        );
    }
}
