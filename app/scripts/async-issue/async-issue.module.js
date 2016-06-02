(function() {
	'use strict';

	angular
		.module('supermodular.asyncissue', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.async-issue', {
				url: '/async-issue',
				views: {
					'menuContent': {
						templateUrl: 'scripts/async-issue/async-issue.html',
						controller: 'AsyncIssueController as vm'
					}
				}
			});
		});
})();
