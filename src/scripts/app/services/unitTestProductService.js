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
            $http.get('/api/products', {headers: {'Content-Type': 'application/json'}})
                .then(function(response) {
                    return response;
                })
                .catch(function(response) {
                    return response;
                })
        };

        var _addProduct = function(data) {
            $http.put('/api/products', data, {headers: {'Content-Type': 'application/json'}})
                .then(function(response) {
                    return response;
                })
                .catch(function(response) {
                    return response
                })
        };

        return {
            addProduct: _addProduct,
            getProducts: _getProducts
        };
    }
}());