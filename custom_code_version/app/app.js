'use strict';

var app = angular.module('shopApp',['ui.router',]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/admin/dash');

	$stateProvider
	// .state('shop',{
	// 	url:'/',
	// 	templateUrl:'',
	// 	controller:'',
	// })

  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller: 'AdminCtrl as ctrl',
    resolve: {
      products: function(productSrv){
        console.log('/ is being hit')
        return productSrv.getProducts();
      }
    }
  })

  .state('admin.dash',{
    url:'/dash',
    templateUrl:'site/partials/dash.html',
    
    resolve: {
      products: function(productSrv){
        console.log('dash')
        return productSrv.getProducts();
      }
    }
    
  })
  .state('admin.add_product',{
    url:'/add_product',
    templateUrl: 'site/partials/add_product.html',
    controller: 'productCtrl as ctrl',
  })
 
	$httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
               	localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });
});
