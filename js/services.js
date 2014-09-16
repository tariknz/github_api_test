'use strict';

/* Services */

angular.module('myApp.services', ['myApp.config', 'myApp.utils'])
	.value('version', '0.1')
	.factory('github', ['$http', '$q', 'WEB_SERVICE_URL', function($http, $q, WEB_SERVICE_URL) {

	//get the webservice url from config.js file
	var webServiceURL = WEB_SERVICE_URL;

	return {
		//service for retrieving repos for username
		getReposForUser: function(username) {
			var deferred = $q.defer();
			$http({
				url: webServiceURL + '/users/' + username + '/repos',
				method: "GET"
			}).
			success(function(data, status) {
				deferred.resolve(data);
			}).error(function(data, status){
				//TODO: need proper error handling if API failing
				deferred.reject(data);
			});

			return deferred.promise;
		},

		//service for getting languages for a specific repo
		getRepoLanguagesForUser: function(username, repo) {
			var deferred = $q.defer();
			$http({
				url: webServiceURL + '/repos/' + username + '/' + repo + '/languages',
				method: "GET"
			}).
			success(function(data, status) {
				deferred.resolve(data);
			}).error(function(data, status){
				deferred.reject(data);
			});

			return deferred.promise;
		}

	}
}]);