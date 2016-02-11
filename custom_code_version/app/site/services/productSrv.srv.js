(function() {
    'use strict'

    angular
        .module('shopApp')
        .service('productSrv', ProductService);

    function ProductService($state, api) {
   
    	this.$state=$state;
    	this.api=api;

    	this.products=[];

    	this.getProducts=getProducts;
    	this.addProduct=addProduct;

    	function getProducts(){
    		var srv=this;
    		return this.api.request('/products',{},'GET')
    		.then(function(response){
    			srv.products=response.data.products;
    			return response.data.products;
    		});
    	}

    	function addProduct(product){
    		var srv=this;
    		this.api.request('/products',product,'POST')
    		.then(function(response){
    			srv.products.push(response.data.product);
    			srv.$state.go('admin.dash');
    		});
    	}

    }





})();