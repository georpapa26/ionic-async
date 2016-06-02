(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'issue',
			path: 'async-issue',
			icon: 'ion-alert-circled'
		}, {
			title: 'series',
			path: 'async-series',
			icon: 'ion-more'
		}, {
			title: 'parallel',
			path: 'async-parallel',
			icon: 'ion-shuffle'
		}, {
			title: 'waterfall',
			path: 'async-waterfall',
			icon: 'ion-android-funnel'
		}];

		return data;
	}
})();
