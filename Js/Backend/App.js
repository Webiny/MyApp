import Webiny from 'webiny';
import Apartments from './Modules/Apartments';

class MyApp extends Webiny.App {
    constructor() {
        super('MyApp.Backend');
        this.modules = [
            new Apartments(this)
        ];

        /*
        // Uncomment this to override the built-in module with your own
        Webiny.registerModule(
            new Webiny.Module('Input', () => import('./Components/Input'))
        );
        */
    }
}

Webiny.registerApp(new MyApp());