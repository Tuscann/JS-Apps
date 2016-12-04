import React, {Component} from 'react';
import {logout} from '../../models/user';

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
        this.onLogoutSuccess=this.onLogoutSuccess.bind(this)

    }

    logout() {
        logout(this.onLogoutSuccess);
    }

    onLogoutSuccess(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push("/");
        } else {
            // Something went wrong, let the user know
        }
    }

    render() {
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};