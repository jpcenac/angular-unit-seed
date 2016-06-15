/**
 * Created by Jay on 6/14/2016.
 */

describe('Products Controller', function() {
    // Initialize Angular Module
    beforeEach(module('UnitTestApp'));
    var $httpBackend, UnitTestProductService, pc;

    // Initialize Mock Data Service
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    // Create an instance of the controller and set scope
    beforeEach(inject(function($controller) {
        var scope = {};
        pc = $controller('ProductsController', {$scope: scope});
    }));

    // Inject the Product Service
    beforeEach(inject(function(_UnitTestProductService_) {
        UnitTestProductService = _UnitTestProductService_;
    }));

    // Handle any unmet requests after test
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets and shows a list of products', function() {
        $httpBackend.expectGET('/api/products')
            .respond([
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
            ]);

        $httpBackend.flush();

        // console.log(pc.productModel);
        // console.log(pc.test);

        expect(pc).toBeDefined();
        expect(pc.productModel[0].productId).toEqual(1);
        expect(pc.productModel[pc.productModel.length - 1].productId).toEqual(pc.productModel.length);

    });
    it('calculates the total of the cost', function() {
        $httpBackend.expectGET('/api/products')
            .respond([
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
                }
            ]);

        $httpBackend.flush();

        var total = pc.totalCost(pc.productModel);
        expect(total).toEqual(32);
    })
});
