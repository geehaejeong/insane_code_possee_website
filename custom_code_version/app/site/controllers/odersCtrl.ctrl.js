(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('ordersCtrl', OrdersCtrl);


        function OrdersCtrl(productSrv,api) {
        	var ctrl=this;
        	ctrl.productSrv=productSrv;
        	ctrl.api=api;

        	ctrl.cart=[];
<<<<<<< HEAD

=======

        	
         


>>>>>>> ef2edb6d167b190aedd73e05ce515c54e63576bc
            function addToCart(product){
                var product = {
                    name: ctrl.name,
                    description: ctrl.description,
                    image: ctrl.image,
                    category: ctrl.category,
                    quantity: ctrl.quantity,
                    price: ctrl.price
                }
            ctrl.cart.push(product);
        }


    })();