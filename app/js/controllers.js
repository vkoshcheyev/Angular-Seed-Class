'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [ '$scope', function($scope) {
     $scope.car = {make: 'Honda',
                   model: 'Civic',
                   year: 2014,
                   price: 24000  
                  }       
  }])
  .controller('MyCtrl2', ['$scope',function($scope) {
     $scope.cars = [
	                {make: 'Honda',
                     model: 'Civic',
                     year: 2014,
                     price: 24000  
                    },
	                {make: 'Honda',
                     model: 'Odyssey',
                     year: 2011,
                     price: 22100  
                    },
	                {make: 'Toyota',
                     model: 'Sienna',
                     year: 2014,
                     price: 26100  
                    },
					]

  }]);