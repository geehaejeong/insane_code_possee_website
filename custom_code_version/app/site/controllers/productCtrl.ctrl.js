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
            label: 'Pens',
            value: 'pens'
        }, {
            label: 'Pencils',
            value: 'pencils'
        }, {
            label: 'Planners',
            value: 'planners'
        }, {
            label: 'Notebooks',
            value: 'notesbooks'
        } ];


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
<<<<<<< HEAD

    })();
=======
    })();

>>>>>>> master
