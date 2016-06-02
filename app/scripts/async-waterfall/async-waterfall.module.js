(function() {
	'use strict';

	angular
		.module('supermodular.asyncwaterfall', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.async-waterfall', {
				url: '/async-waterfall',
				views: {
					'menuContent': {
						templateUrl: 'scripts/async-waterfall/async-waterfall.html',
						controller: 'AsyncWaterfallController as vm'
					}
				}
			});
		});
})();
