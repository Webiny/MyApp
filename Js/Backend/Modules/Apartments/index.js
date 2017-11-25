import React from 'react';
import Webiny from 'webiny';
import List from './List';
import Form from './Form';

class Apartments extends Webiny.App.Module {
    init() {
        this.name = 'Apartments';
        const appManager = 'my-app-apartment-manager';

        this.registerMenus(
            <Webiny.Ui.Menu label="Apartments" route="Apartments.List" icon="fa-address-book" role={appManager}/>
        );

        this.registerRoutes(
            new Webiny.Route('Apartments.Create', '/my-app/apartments/create', Form, 'Add Apartment').setRole(appManager),
            new Webiny.Route('Apartments.Edit', '/my-app/apartments/:id', Form, 'Edit Apartment').setRole(appManager),
            new Webiny.Route('Apartments.List', '/my-app/apartments', List, 'Apartments').setRole(appManager)
        );
    }
}

export default Apartments;