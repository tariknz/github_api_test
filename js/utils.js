'use strict';

/* Utilities */

angular.module('myApp.utils', [])
	.factory('utils', function () {
		return {
			//disables form items
			disableForm: function (){
				$(document).find('input, textarea, button, select').attr('disabled','disabled');
				showLoader(true);
			},

			enableForm: function (){
				$(document).find('input, textarea, button, select').removeAttr('disabled');
				showLoader(false);
			}
		};

		function showLoader (show) {
			//shows or hides the loader icon (if used)
			if(show)
				$('.loader-icon').show();
			else
				$('.loader-icon').hide();
		}

	});