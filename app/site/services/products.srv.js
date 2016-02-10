(function() {
    'use strict'

    angular
        .module('shopApp')
        .service('productSrv', ProductService);

    function ProductService($state, api) {
        //dependencies
        this.api = api;
        this.state = $state;
        this.products = [];
        //methods
        this.getProducts = getProducts;
        this.addProduct = addProduct;
        this.updateProduct = updateProduct;
        this.deleteProduct = deleteProduct;
        this.getProduct = getProduct;
        this.updateProductList = updateProductList;
        this.removeProduct = removeProduct;


        function getProducts() {
            var _this = this;
            return this.api.request('/products', {}, 'GET')
                .then(function(res) {
                    //success promise
                    console.log(res);
                    _this.products = res.data.products;
                    return res.data.products;
                }, function(res) {
                    //error promise
                    console.log(res);
                    return;
                })
        }

        function addProduct(product) {
            var _this = this;
            this.api.request('/products', product, 'POST')
                .then(function(res) {
                    console.log(res);
                    if (res.status === 200) {
                        //product was added successfully
                        _this.products.push(res.data.product);
                        _this.state.go('admin.dash');

                    }
                })
        }

        function updateProduct(product, productId) {
            var _this = this;
            this.api.request('/products/' + productId, product, 'PUT')
                .then(function(res) {
                    console.log(res);
                    if (res.status === 200) {
                        //product was updated successfully
                        _this.updateProductList(product, productId);

                    }
                })
        }

        function deleteProduct(productId) {
            var _this = this;
            this.api.request('/products/' + productId, {}, 'DEL')
                .then(function(res) {
                    console.log(res);
                    if (res.status === 200) {
                        //product was deleted successfully
                        _this.removeProduct(productId);
                        _this.state.go('admin.dash');

                    }
                })
        }

        function getProduct(productId) {
            var _this = this
            return this.api.request('/products/' + productId, {}, 'GET');
        }

        function updateProductList(product, productId) {
            for (index in this.products) {
                if (this.products[index].id == productId) {
                    this.products[index].name = product.name;
                    this.products[index].image = product.image;
                    this.products[index].description = product.description;
                    this.products[index].category = product.category;
                    this.products[index].price = product.price;
                    this.products[index].quantity = product.quantity;
                }
            }
        }

        function removeProduct(productId) {
            for (index in this.products) {
                if (this.products[index].id == productId) {
                    delete this.products[index];
                }
            }
        }

    }
})();