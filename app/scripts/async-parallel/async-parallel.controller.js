(function() {
	'use strict';

	angular
		.module('supermodular.asyncparallel')
		.controller('AsyncParallelController', AsyncParallelController);

	AsyncParallelController.$inject = ['$scope', 'asyncParallelService'];

	/* @ngInject */
	function AsyncParallelController($scope, asyncParallelService) {
		var vm = angular.extend(this, {

		});

	}
})();
