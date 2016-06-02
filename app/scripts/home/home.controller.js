(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['menuItems', 'homeDataService', 'externalAppsService', '$cordovaEmailComposer'];

	/* @ngInject */
	function HomeController(menuItems, homeDataService, externalAppsService, $cordovaEmailComposer) {
		var vm = angular.extend(this, {
			entries: menuItems,
		});
	}
})();
