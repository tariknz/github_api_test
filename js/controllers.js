'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'myApp.config', 'nvd3ChartDirectives'])
	.controller('MainCtrl', ['$scope', 'utils', 'github', '$routeParams', function($scope, utils, github, $routeParams) {

		$scope.repos = [];

		//method for getting the repos (calling the service)
		$scope.getReposForUser = function(){
			//disable form while loading (also show loader)
			utils.disableForm();
			github.getReposForUser($scope.username).then(function(data){
				//once the promise is resolved 
				$scope.repos = data;

				//renable the form
				utils.enableForm();
			});
		}

		//check if there are parameters prefilled then preload the repos for the user passed on in the route param
		if($routeParams.username) {
			$scope.username = $routeParams.username;
			$scope.getReposForUser();
		}
		else
			$scope.username = 'twitter';

	}])
	
	.controller('DetailCtrl', ['$scope','utils', 'github', '$routeParams', function($scope, utils, github, $routeParams) {
	
		//details view (init)
		$scope.username = $routeParams.username;
		$scope.repo = $routeParams.repo;
		$scope.languages = null;
		$scope.pieChartData = [];

		//call the service to get the languages
		$scope.getRepoLanguagesForUser = function(){
			//show loader while loading
			utils.disableForm();
			github.getRepoLanguagesForUser($scope.username, $scope.repo).then(function(data){
				$scope.languages = data;

				//this reformats the json to the format supported by the graphing utility (NVD3)
				for (var key in $scope.languages) {
					$scope.pieChartData.push({"key": key, "y": $scope.languages[key]});
				};

				//remove loader
				utils.enableForm();
			});
		}

		//load the graph
		$scope.getRepoLanguagesForUser();


		//graph settings
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
