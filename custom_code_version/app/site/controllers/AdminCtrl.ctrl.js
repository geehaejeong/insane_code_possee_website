(function() {
	'use strict'

	angular
		.module('shopApp')
		.controller('AdminCtrl', AdminCtrl);


	function AdminCtrl(products,$state,productSrv,api){
		var ctrl=this;
		ctrl.api=api;
		ctrl.products=products;
		ctrl.$state=$state;
		ctrl.productSrv=productSrv;
		        this.deleteProduct = deleteProduct;


		     function deleteProduct(productId) {
            console.log(productId);
            var ctrl = this;
            // var productId = product.id;
            ctrl.api.request('/products/'+productId,{},'DEL');
            ctrl.$state.go('admin.dash');

        	}


	}
})();
