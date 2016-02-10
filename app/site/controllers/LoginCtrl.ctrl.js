(function(){
	angular
		.module('shopApp')
		.controller('LoginController',LoginController);

	function LoginController($state,api){
		var ctrl=this;
		ctrl.api=api;
		ctrl.$state=$state;
		


	}
})