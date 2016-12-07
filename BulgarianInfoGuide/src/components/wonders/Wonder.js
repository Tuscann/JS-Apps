import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Wonder extends Component {
    constructor(props){
        super(props);
    }
    render() {

        let link=<Link to={'/'+this.props.cityName +"/wonders/" + this.props.id} className="btn btn-default">Read more</Link>;
        if(this.props.userCreator === sessionStorage.getItem('userId')){
            link=[<Link to={'/'+this.props.cityName+"/wonders/" + this.props.id} key="0" className="btn btn-default">Read more</Link>,' ',
                <Link to={'/'+this.props.cityName+"/wonders/"+this.props.id + "/edit"} key="1" className="btn btn-default">Edit</Link>];
        }
        let desc = this.props.description;
        let shortDesc= desc.substr(0,30);
        if(desc.length> shortDesc.length)
            shortDesc+="...";
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{shortDesc}</td>
                <td>{link}</td>
            </tr>
        )
    }
}
