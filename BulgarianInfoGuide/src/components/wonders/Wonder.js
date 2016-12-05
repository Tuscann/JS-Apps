import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Wonder extends Component {
    constructor(props){
        super(props);
    }
    render() {

        let link=<Link to={this.props.cityName +"/wonders/" + this.props.id}>Read more</Link>;
        if(this.props.userCreator === sessionStorage.getItem('userId')){
            link=[<Link to={this.props.cityName+"/wonders/" + this.props.id} key="0">Read more</Link>,
                <Link to={this.props.cityName+"/wonders/edit"} key="1">Edit</Link>];
        }
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{link}</td>
            </tr>
        )
    }
}
