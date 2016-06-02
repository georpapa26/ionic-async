(function() {
	'use strict';

	angular
		.module('supermodular.asyncparallel', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.async-parallel', {
				url: '/async-parallel',
				views: {
					'menuContent': {
						templateUrl: 'scripts/async-parallel/async-parallel.html',
						controller: 'AsyncParallelController as vm'
					}
				}
			});
		});
})();
