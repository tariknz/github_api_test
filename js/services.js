'use strict';

/* Services */

angular.module('myApp.services', ['myApp.config', 'myApp.utils'])
	.value('version', '0.1')
	.factory('github', ['$http', '$q', function($http, $q) {

	var webServiceURL = 'https://api.github.com';

	return {
		getReposForUser: function(username) {
			var deferred = $q.defer();
			$http({
				url: webServiceURL + '/repos/octokit/octokit.rb',
				method: "GET",
				params: { }
			}).
			success(function(data, status) {
				deferred.resolve(data);
			}).error(function(data, status){
				handleError(status);
				deferred.reject(data);
			});

			return deferred.promise;
		}
	}
}]);