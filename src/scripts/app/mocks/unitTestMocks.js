/**
 * Created by Jay on 6/14/2016.
 */
(function() {
    'use strict';

    angular
        .module('UnitTestMocks', ['ngMockE2E'])
        .run(function ($httpBackend) {

            var products = [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2009",
                    "description": "Leaf rake with 48-inch handle.",
                    "cost": 9.00,
                    "price": 19.95,
                    "category": "garden",
                    "tags": [ "leaf", "tool"],
                    "imageUrl": "http://www.amestruetemper.com/uploads/images/True%20Temper/products/1919200_L_02.jpg"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "TBX-1242",
                    "releaseDate": "May 21, 2016",
                    "description": "Bucket with two wheels",
                    "cost": 23.00,
                    "price": 56.99,
                    "category": "carriage",
                    "tags": ["utility"],
                    "imageUrl": "http://i.imgur.com/JfJhONA.jpg"
                },
                {
                    "productId": 3,
                    "productName": "Knee Pad",
                    "productCode": "KNP-4141",
                    "releaseDate": "April 5, 2015",
                    "description": "A foam pad for kneeling",
                    "cost": 5.00,
                    "price": 11.99,
                    "category": "accessories",
                    "tags": ["utility", "safety", "ease of use"],
                    "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/191346/lady-worship-praise.png"
                },
                {
                    "productId": 4,
                    "productName": "Hand Shovel",
                    "productCode": "HSV-5653",
                    "releaseDate": "June 24, 2014",
                    "description": "A small shovel for digging pot holes",
                    "cost": 6.00,
                    "price": 15.99,
                    "category": "garden",
                    "tags": ["tool", "hand tool", "composite"],
                    "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/169586/shovel.png"
                },
                {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0049",
                    "releaseDate": "May 21, 2013",
                    "description": "Curved claw steel hammer",
                    "cost": 4.00,
                    "price": 8.99,
                    "category": "toolbox",
                    "tags": ["tool", "hand tool", "composite"],
                    "imageUrl": "http://i.imgur.com/Bq7dbSe.jpg"
                }
            ];

            //Retrieves a list of Products
            var productUrl = "/api/products";
            $httpBackend.whenGET(productUrl).respond(products);

            //Retrieves a single Product
            var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var product = {"productId": 0};
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];

                if (id > 0) {
                    for (var i = 0; i < products.length; i++){
                        if (products[i].productId == id) {
                            product = products[i];
                            break;
                        }
                    }
                }
                return [200, product, {}];
            });

            // Posting changes to Resource
            $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
                var product = angular.fromJson(data);
                if(!product.productId) {
                    // new product ID
                    product.productId = products[products.length - 1].productId + 1;
                    products.push(product);
                }
                else {
                    // updated product
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].productId === product.productId) {
                            products[i] = product;
                            break;
                        }
                    }
                }
                return [200, product, {}];
            });

            // Intercepts all Url request
            $httpBackend.whenGET(/src/).passThrough();
        })
}());