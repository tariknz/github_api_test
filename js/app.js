'use strict';

angular.module('myApp', ['ngRoute', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'myApp.config', 'myApp.utils', 'nvd3ChartDirectives'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider,  $locationProvider) {
		//$locationProvider.html5Mode(true);
		$routeProvider
		.when('/',
			{
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			}
		)
		//lets you auto load a username by passing a username param (used when clicking home from details page)
		.when('/:username',
			{
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			}
		)
		//for the details view
		.when('/:username/:repo',
			{
				templateUrl: 'partials/detail.html',
				controller: 'DetailCtrl'
			}
		)
		.otherwise({redirectTo: '/'});
	}]);
