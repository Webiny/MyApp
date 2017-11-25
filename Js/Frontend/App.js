import React from 'react';
import Webiny from 'webiny';
import Dashboard from './Modules/Dashboard';
import logo from 'MyApp/Frontend/Assets/images/logo.png';

class MyAppFrontend extends Webiny.App {
    constructor() {
        super('MyApp.Frontend');
        this.modules = [
            new Dashboard(this)
        ];

        Webiny.configureModule('Webiny/Layout/Logo', (Logo) => {
            Logo.configure({
                defaultProps: {
                    img: logo
                }
            });
        });

        Webiny.configureModule('Input', (Input) => {
            Input.configure({
                defaultProps: {
                    renderer() {
                        return (
                            <div>
                                <label>{this.props.label}: </label>
                                <input type="text" value={this.props.value || ''} onChange={e => this.props.onChange(e.target.value)}/>
                            </div>
                        );
                    }
                }
            });
        });

        Webiny.Router.setBaseUrl('/my-app');
        Webiny.Router.setTitlePattern('%s | MyApp');
        Webiny.Router.setDefaultRoute('Dashboard');
    }
}

Webiny.registerApp(new MyAppFrontend());