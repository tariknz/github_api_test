'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'myApp.config', 'nvd3ChartDirectives'])
	.controller('MainCtrl', ['$scope', 'utils', 'github', function($scope, utils, github) {

		$scope.username = 'twitter';
		$scope.repos = [];

		$scope.exampleData = [{
			key: "One",
			y: 5
		}, {
			key: "Two",
			y: 2
		}, {
			key: "Three",
			y: 9
		}, {
			key: "Four",
			y: 7
		}, {
			key: "Five",
			y: 4
		}, {
			key: "Six",
			y: 3
		}, {
			key: "Seven",
			y: 9
		}];


		$scope.pieChartData = function(){
			var pieChartDataJson = [];
			for (var key in $scope.languages) {
				console.log(key + ' ' + $scope.languages[key]);
				pieChartDataJson.push({"key": key, "y": $scope.languages[key]});
			};

			return pieChartDataJson;
		}

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

		$scope.getReposForUser = function(){
			github.getReposForUser($scope.username).then(function(data){
				console.log(data);
				$scope.repos = data;
			});
		}

		$scope.getRepoLanguagesForUser = function(username, reponame){
			github.getRepoLanguagesForUser(username, reponame).then(function(data){
				console.log(data);
				$scope.languages = data;
			});
		}

	}]);
