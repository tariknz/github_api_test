'use strict';

angular.module('myApp', ['ngRoute', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'myApp.config', 'myApp.utils'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider,  $locationProvider) {
		//$locationProvider.html5Mode(true);
		$routeProvider
		.when('/',
			{
				templateUrl: '/partials/Main.html',
				controller: 'MainCtrl'
			}
		)

		$routeProvider.otherwise({redirectTo: '/'});
	}])
	.run(function($rootScope, $templateCache) {
		//don't cache partials - reload them when changed
		$rootScope.$on('$viewContentLoaded', function() {
			$templateCache.removeAll();
		});
	});
