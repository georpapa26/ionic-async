(function() {
	'use strict';

	angular
		.module('supermodular.asyncseries')
		.controller('AsyncSeriesController', AsyncSeriesController);

	AsyncSeriesController.$inject = ['$scope', '$timeout', 'asyncSeriesService'];

	/* @ngInject */
	function AsyncSeriesController($scope, $timeout, asyncSeriesService) {
		var vm = angular.extend(this, {
			run: run
		});

		/*
		 * A complex taks that takes up to 5 seconds to be completed.
		 */
		function task1(callback){
			console.log('Task 1 started. Wait for 5 sec for completion.');
			$timeout(function(){
				console.log('Task 1 completed.');
				var errorOccurred = null;
				callback(errorOccurred, 'one');
			},
			5000);
		}

		/*
		 * A less complex taks that takes up to 2 seconds to be completed.
		 */
		function task2(callback){
			console.log('Task 2 started. Wait for 2 sec for completion.');
			$timeout(function(){
				console.log('Task 2 completed.');
				var errorOccurred = null;
				callback(errorOccurred, 'two');
			},
			2000);
		}

		function run(){

			async.series({
				one: task1,
				two: task2,
				},
				function(err, result){
					console.log('Result: ', result);
					console.log('DONE.');
			});
		}

	}
})();
