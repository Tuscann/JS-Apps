import React, {Component} from 'react';
import {Link} from 'react-router';
import './HomePage.css';

export default class HomePage extends Component {
   
    
    render() {
        let message = "";
        if (sessionStorage.getItem('username')) {
            message = <div>
                <div>Това е малък сайт за интересни факти за някои градове в България. Изберете някой от градовете
                    показани на картата:
                </div>
                <div id="map">
                    <Link to="/Pleven" id="Pleven">Плевен</Link>
                    <Link to="/Varna" id="Varna">Варна</Link>
                    <Link to="/Sofia" id="Sofia">София</Link>
                    <Link to="/Provadia" id="Provadia">Провадия</Link>
                    <Link to="/Russe" id="Russe">Русе</Link>
                    <Link to="/Plovdiv" id="Plovdiv">Пловдив</Link>
                    <Link to="/Bourgas" id="Bourgas">Бургас</Link>
                    <Link to="/Vidin" id="Vidin">Видин</Link>
                </div>
            </div>
        } else {
            message = <div>Това е малък сайт за интересни факти за някои градове в България. За да използвате цялата
                функцуоналност на сайта, моля <Link to="/login">login</Link>.</div>
        }
        return (
            message
        );
    }
}

// <img src="http://www.bghotelier.com/igra/map2.jpg"/>
// <img src="http://miel.travel/userfiles/image/Map%20Bulgaria1.jpg"/>
// <img src="http://store.picbg.net/pubpic/65/2B/32795d2c479f652b.jpg"/>