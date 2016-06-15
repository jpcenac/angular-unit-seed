/**
 * Created by Jay on 6/14/2016.
 */
(function() {
   'use strict';

    angular
        .module('UnitTestApp', ['ngRoute', 'ngSanitize', 'ngMockE2E', 'ngResource', 'UnitTestServices', 'UnitTestMocks'])
        .config(function($routeProvider) {
            
            $routeProvider.otherwise({redirectTo: '/'});
            
            $routeProvider
                .when('/', {
                    templateUrl: '../src/views/productsView.html'
                })
                .when('/Products', {
                    templateUrl: '../src/views/productsView.html'
                })
                .when('/AddProduct', {
                    templateUrl: '../src/views/addProductView.html'
                })
                .when('/About', {
                    templateUrl: '../src/views/aboutView.html'
                })
        })
}());