(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('ordersCtrl', OrdersCtrl);


        function OrdersCtrl(productSrv,api) {
        	var ctrl=this;
        	ctrl.productSrv=productSrv;
        	ctrl.api=api;

        	var cart=[];

        	


        }

    })();