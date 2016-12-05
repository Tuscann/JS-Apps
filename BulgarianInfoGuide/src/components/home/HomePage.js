import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let message = "";
        if (sessionStorage.getItem('username')) {
            message = <div>
                <div>Това е малък сайт за интересни факти за някои градове в България. Изберете някой от градовете
                    изброени по долу:
                </div>
                <ul>
                    <li><Link to="/Pleven" name="pleven">Плевен</Link></li>
                    <li><Link to="/Varna" name="varna">Варна</Link></li>
                    <li><Link to="/Sofia" name="sofia">София</Link></li>
                    <li><Link to="/Provadia" name="provadia">Провадия</Link></li>
                </ul>
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