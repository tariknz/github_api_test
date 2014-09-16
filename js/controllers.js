'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'myApp.config', 'nvd3ChartDirectives'])
	.controller('MainCtrl', ['$scope', 'utils', 'github', function($scope, utils, github) {

		$scope.username = 'twitter';
		$scope.repos = [];

		$scope.getReposForUser = function(){
			github.getReposForUser($scope.username).then(function(data){
				console.log(data);
				$scope.repos = data;
			});
		}

	}])
	
	.controller('DetailCtrl', ['$scope','utils', 'github', '$routeParams', function($scope, utils, github, $routeParams) {
	
		$scope.username = $routeParams.username;
		$scope.repo = $routeParams.repo;
		$scope.languages = null;
		$scope.pieChartData = [];

		$scope.getRepoLanguagesForUser = function(){
			github.getRepoLanguagesForUser($scope.username, $scope.repo).then(function(data){
				console.log(data);
				$scope.languages = data;

				for (var key in $scope.languages) {
					console.log(key + ' ' + $scope.languages[key]);
					$scope.pieChartData.push({"key": key, "y": $scope.languages[key]});
				};
			});
		}

		$scope.getRepoLanguagesForUser();

		//{Shell: 94173, Java: 4323129, C: 3546, C++: 323853}

		$scope.width = 500;
		$scope.height = 500;

		$scope.xFunction = function() {
			return function(d) {
				return d.key;
			};
		}
		$scope.yFunction = function() {
			return function(d) {
				return d.y;
			};
		}

		$scope.descriptionFunction = function() {
			return function(d) {
				return d.key;
			}
		}

	}]);
