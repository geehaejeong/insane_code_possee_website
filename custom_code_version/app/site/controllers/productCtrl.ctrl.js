(function() {
        'use strict'
        angular
            .module('shopApp')
            .controller('productCtrl', ProductCtrl);


        function ProductCtrl(api, productSrv,$state) {
            var ctrl = this;
            ctrl.api = api;
            ctrl.productSrv = productSrv;
            ctrl.$state=$state;
            ctrl.addProduct = addProduct;
            
            ctrl.categories = [{
            label: 'Shirts',
            value: 'shirts'
        }, {
            label: 'Pants',
            value: 'pants'
        }, {
            label: 'Shoes',
            value: 'shoes'
        }, {
            label: 'Outerwear',
            value: 'outerwear'
        }, {
            label: 'Accessories',
            value: 'accessories'
        }, ];


            function addProduct() {
                var product = {
                    name: ctrl.name,
                    image: ctrl.image,
                    description: ctrl.description,
                    category: ctrl.category,
                    price: ctrl.price,
                    quantity:ctrl.quantity,
                    status: ctrl.status
                }

                ctrl.productSrv.addProduct(product);
            }
        }

    })();