(function() {
    
    angular
        .module('ProductCtrl')
        .controller('ProductCtrl', ProductCtrl);

	function ProductCtrl($stateParams,api,productSrv){
		var ctrl = this
		ctrl.productSrv = productSrv;

	ctrl.categories = [
		{label:'Shirts',value:'shirts'},
		{label:'Pants',value:'pants'},
		{label:'Shoes',value:'shoes'},
		{label:'Outerwear',value:'outerwear'},
		{label:'Accessories',value:'accessories'},
	];
	
	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';
	
	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			ctrl.product = res.data.product;
			//TODO #2 set category based on edit form based on 
			//product category
		// for (var category in ctrl.categories) {
		// 	if (ctrl.product.category == ctrl.categories[category].value) {
		// // 	ctrl.category =category;
		// }
	// }
		} )
	}


}
 function addProduct (){
	var ctrl = this;
	//TODO #2
	//create product object, pass to plugin service
	//Update text in button
	var product = {
		name: ctrl.name,
		description: ctrl.description,
		image: ctrl.image,
		category: ctrl.category,
		quantity: ctrl.quantity,
		price: ctrl.price,
		status:true,
	}
	ctrl.productSrv.addProduct(product);
}

 function updateProduct(){
	var ctrl = this;
	ctrl.product_update_btn ="Updating";
	ctrl.productSrv.updateProduct(ctrl.product, ctrl.product.id)

	//TODO #2
	//create product object, pass to plugin service
	//Update text in button
	
}

function deleteProduct(){
	var ctrl = this;
	ctrl.product_delete_btn="Deleting";
	ctrl.productSrv.deleteProduct(ctrl.product.id);


	//TODO #2
	//remove product, pass to plugin service
	//update text in button
	ß}
}

})();

