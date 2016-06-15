/**
 * Created by Jay on 6/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('UnitTestApp')
        .controller('ProductsController', ['UnitTestProductService', ProductsController]);
    
        function ProductsController(UnitTestProductService) {
            var pc = this;

            pc.productModel = {};
            pc.test = 'hello!';

            UnitTestProductService.getProducts()
                .then(function(response)  {
                    pc.productModel = response.data;
                })
                .catch(function(response) {
                    console.log("There was an error retrieving product list - " + response.status);
                });

            pc.totalCost = function(model) {
                var totalCost = 0;
                for(var key in model) {
                    if(model.hasOwnProperty(key)) {
                        totalCost += model[key].cost;
                    }
                }
                return totalCost
            };

            pc.test = 'nope!';
        }
}());