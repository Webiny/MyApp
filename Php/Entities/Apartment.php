<?php
namespace Apps\MyApp\Php\Entities;

use Apps\Webiny\Php\Lib\Api\ApiContainer;
use Apps\Webiny\Php\Lib\Entity\AbstractEntity;
use Apps\Webiny\Php\Lib\Entity\Indexes\IndexContainer;
use Webiny\Component\Mongo\Index\SingleIndex;

/**
 * Class Apartment
 *
 * @property float $price
 */
class Apartment extends AbstractEntity
{
    protected static $classId = 'MyApp.Entities.Apartment';
    protected static $collection = 'MyAppApartments';

    public function __construct()
    {
        parent::__construct();
        $this->attr('name')->char()->setValidators('required');
        $this->attr('description')->char()->setValidators('required');
        $this->attr('dateAvailable')->date()->setValidators('required');
        $this->attr('mainImage')->image();
        $this->attr('gallery')->images();
        $this->attr('price')->float()->setValidators('required');
        $this->attr('features')->arr();
        $this->attr('buildingCondition')->char()->setValidators('in:excellent:good:average:bad');
    }

    protected function entityApi(ApiContainer $api)
    {
        parent::entityApi($api);

        /**
         * @api.name Get apartment price
         */
        $api->get('{id}/price', function(){
            return $this->price;
        });
    }

    protected static function entityIndexes(IndexContainer $indexes)
    {
        parent::entityIndexes($indexes);

        $indexes->add(new SingleIndex('price', 'price'));
    }
}