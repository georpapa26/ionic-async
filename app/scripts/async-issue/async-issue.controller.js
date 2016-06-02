(function() {
	'use strict';

	angular
		.module('supermodular.asyncissue')
		.controller('AsyncIssueController', AsyncIssueController);

	AsyncIssueController.$inject = ['$scope', '$timeout', 'asyncIssueService'];

	/* @ngInject */
	function AsyncIssueController($scope, $timeout, asyncIssueService) {
		var vm = angular.extend(this, {
			run: run
		});

		/*
		 * A complex taks that takes up to 5 seconds to be completed.
		 */
		function task1(){
			console.log('Task 1 started. Wait for 5 sec for completion.');
			$timeout(function(){
				console.log('Task 1 completed.');
			},
			5000);
		}

		/*
		 * A less complex taks that takes up to 2 seconds to be completed.
		 */
		function task2(){
			console.log('Task 2 started. Wait for 2 sec for completion.');
			$timeout(function(){
				console.log('Task 2 completed.');
			},
			2000);
		}

		function run(){
			console.log('Execute task 1.');
			task1();
			console.log('Execute task 2.');
			task2();

			console.log('DONE.');
		}

	}
})();
