import React, {Component} from 'react';

export default class Greeting extends Component{
    render(){
        if(!this.props.loggedIn) return null;
        return(
            <div>Здравей, {this.props.username}</div>
        )
    }
}
