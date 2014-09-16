'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'myApp.config'])
	.controller('MainCtrl', ['$scope', 'utils', 'github', function($scope, utils, github) {

		github.getReposForUser('test').then(function(data){
			console.log(data);
			$scope.test = data;
		});

	}]);
