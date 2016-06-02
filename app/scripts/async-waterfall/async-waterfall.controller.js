(function() {
	'use strict';

	angular
		.module('supermodular.asyncwaterfall')
		.controller('AsyncWaterfallController', AsyncWaterfallController);

	AsyncWaterfallController.$inject = ['$scope', 'asyncWaterfallService'];

	/* @ngInject */
	function AsyncWaterfallController($scope, asyncWaterfallService) {
		var vm = angular.extend(this, {

		});

	}
})();
