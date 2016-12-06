import React, {Component} from 'react';
import {logout} from '../../models/user';

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        }
    }

    render() {
        return (
            <div>
                <span>Вие успешно излязохте. Ако желаете да се възползвате от функционалността на сайта отидете на страницата</span>
            </div>
        );
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};