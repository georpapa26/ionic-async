(function() {
	'use strict';

	angular
		.module('supermodular.asyncseries', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.async-series', {
				url: '/async-series',
				views: {
					'menuContent': {
						templateUrl: 'scripts/async-series/async-series.html',
						controller: 'AsyncSeriesController as vm'
					}
				}
			});
		});
})();
