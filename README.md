# MyApp demo app
Example app to show the basic structure of frontend and backend apps.

1. Install Webiny project
2. Clone this repo into `Apps/MyApp`
3. Enable the app in `Configs/Base/Apps.yaml`:
```
Apps:
    MyApp: true
```
4. In your project root, run `$ php Apps/Webiny/Php/Cli/install.php Local MyApp`
5. Run development build using `webiny-cli`
6. Navigate to `http://yourproject.app:8000/my-app` to se the frontend app
7. In backend, enable the `Apartment Manager` role for your user. 