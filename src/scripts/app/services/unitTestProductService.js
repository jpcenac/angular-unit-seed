/**
 * Created by Jay on 6/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('UnitTestServices')
        .factory('UnitTestProductService', ['$http', UnitTestProductService]);

    function UnitTestProductService($http) {

        var _getProducts = function() {
            return $http.get('/api/products', {});
        };

        var _addProduct = function(data) {
            return $http.post('/api/products', data, {});
        };

        return {
            addProduct: _addProduct,
            getProducts: _getProducts
        };
    }
}());