import React from 'react';
import Webiny from 'webiny';
import List from './Users';

class Users extends Webiny.App.Module {
    init() {
        this.name = 'Users';

        this.registerMenus(
            // Create a Menu with title "Users", which points to route "Users.List"
            // and has an icon "fa-people"
            <Webiny.Ui.Menu label="Users" route="MyUsers.List" icon="fa-user"/>
        );

        this.registerRoutes(
            // Create a Route called "Users.List", which matches "/my-users"
            // and renders Users component with document title of "My Users"
            new Webiny.Route('MyUsers.List', '/my-users', List, 'My Users')
        );
    }
}

export default Users;