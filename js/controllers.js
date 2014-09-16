'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'myApp.config'])
	.controller('MainCtrl', ['$scope', 'utils', 'github', function($scope, utils, github) {

		$scope.username = 'twitter';
		$scope.repos = [];

		$scope.getReposForUser = function(){
			github.getReposForUser($scope.username).then(function(data){
				console.log(data);
				$scope.repos = data;
			});
		}

	}]);
