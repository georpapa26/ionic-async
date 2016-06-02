(function() {
	'use strict';

	angular
		.module('supermodular.asyncparallel')
		.controller('AsyncParallelController', AsyncParallelController);

	AsyncParallelController.$inject = ['$scope', '$timeout', 'asyncParallelService'];

	/* @ngInject */
	function AsyncParallelController($scope, $timeout, asyncParallelService) {
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

			async.parallel({
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
