'use strict';
describe('controllers', function(){

	describe('MyCtrl1', function() {
	var scope = {}, ctrl;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($controller) {
		scope = {};
		ctrl = $controller('MyCtrl1', {$scope: scope});
	}));
	
	it('should have a car property', inject(function () {
		expect(scope.car).not.toBe(undefined);
		}));
	
    it('should have a car.make property', inject(function () {
		expect(scope.car.make).not.toBe(undefined);
		}));
		
    it('should have a car.model property', inject(function () {
		expect(scope.car.model).not.toBe(undefined);
		}));
		
    it('should have a car.year property', inject(function () {
		expect(scope.car.year).not.toBe(undefined);
		}));
		
    it('should have a car.price property', inject(function () {
		expect(scope.car.price).not.toBe(undefined);
		}));

    it('should have a car.make should be Honda', inject(function () {
		expect(scope.car.make).toBe("Honda");
		}));
		
    it('should have a car.model should be Civic', inject(function () {
		expect(scope.car.model).toBe("Civic");
		}));
		
	});

	
	describe('MyCtrl2', function() {
	var scope = {}, ctr2;
	
	beforeEach(module('myApp'));
	
	beforeEach(inject(function($controller) {
		scope = {};
		ctr2 = $controller('MyCtrl2', {$scope: scope});
	}));
	
	it('MyCtrl2 should exists', inject(function () {
		expect(scope).not.toBe(undefined);
		}));
	
	it('should have a cars property', inject(function () {
		expect(scope.cars).not.toBe(undefined);
		}));
		
	it('should have 3 cars', inject(function () {
		expect(scope.cars.length).toBe(3);
		}));

		
	it('should be able to add one more car', inject(function () {
	    scope.cars.push({make: 'Honda',
                   model: 'Civic',
                   year: 2014,
                   price: 24000  
                  });
		expect(scope.cars.length).toBe(4);
		}));
		
	it('The second car make should be Honda', inject(function () {
		expect(scope.cars[1].make).toBe("Honda");
		}));
		
		
	});
	
});