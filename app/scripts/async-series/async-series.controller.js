(function() {
	'use strict';

	angular
		.module('supermodular.asyncseries')
		.controller('AsyncSeriesController', AsyncSeriesController);

	AsyncSeriesController.$inject = ['$scope', 'asyncSeriesService'];

	/* @ngInject */
	function AsyncSeriesController($scope, asyncSeriesService) {
		var vm = angular.extend(this, {

		});

	}
})();
