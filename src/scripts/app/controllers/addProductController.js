/**
 * Created by Jay on 6/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('UnitTestApp')
        .controller('AddProductController', ['UnitTestProductService', AddProductController]);
    
    function AddProductController(UnitTestProductService) {
        var ap = this;
        
        ap.newProduct = {
            productId: null,
            productName: "",
            productCode: "",
            releaseDate: "",
            description: "",
            cost: null,
            price: null,
            category: "",
            tags: [],
            imageUrl: ""
        };
        
        ap.submit = function(product) {
            var response = UnitTestProductService.addProduct(product);
            console.log(response);
        };
    }

}());