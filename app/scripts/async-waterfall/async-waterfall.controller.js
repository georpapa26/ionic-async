(function() {
	'use strict';

	angular
		.module('supermodular.asyncwaterfall')
		.controller('AsyncWaterfallController', AsyncWaterfallController);

	AsyncWaterfallController.$inject = ['$scope','$timeout', 'asyncWaterfallService'];

	/* @ngInject */
	function AsyncWaterfallController($scope, $timeout, asyncWaterfallService) {
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
				callback(errorOccurred, 5);
			},
			5000);
		}

		/*
		 * A less complex taks that takes up to 2 seconds to be completed.
		 */
		function task2(task1Result, callback){
			console.log('Task 2 started. Wait for 2 sec for completion.');
			$timeout(function(){
				console.log('Task 2 completed.');
				var errorOccurred = null;
				var value = task1Result * 2;

				callback(errorOccurred, value);
			},
			2000);
		}

		function run(){

			async.waterfall([
				task1,
				task2,
				],
				function(err, result){
					console.log('Result: ', result);
					console.log('DONE.');
			});
		}


	}
})();
