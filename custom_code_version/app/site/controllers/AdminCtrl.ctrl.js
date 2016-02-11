(function() {
	'use strict'

	angular
		.module('shopApp')
		.controller('AdminCtrl', AdminCtrl);


	function AdminCtrl(products,$state,productSrv){
		var ctrl=this;
		ctrl.products=products;
		ctrl.$state=$state;
		ctrl.productSrv=productSrv;


	}
})();