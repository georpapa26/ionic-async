(function() {
	'use strict';

	angular
		.module('supermodular.common')
		.factory('externalAppsService', externalAppsService);

	externalAppsService.$inject = ['$window'];

	/* @ngInject */
	function externalAppsService($window) {
		var service = {
			openExternalUrl: openExternalUrl
		};
		return service;

		// ******************************************************

		function openExternalUrl(url) {
			$window.open(url, '_system', 'location=yes');
			return false;
		}
	}
})();
