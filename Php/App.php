<?php

namespace Apps\MyApp\Php;

class App extends \Apps\Webiny\Php\Lib\Apps\App
{
    public function bootstrap()
    {
        parent::bootstrap();
        $this->addAppRoute('/^\/my-app/', 'MyApp:Templates/MyApp.tpl');
    }
}