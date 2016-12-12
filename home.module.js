(function ()
{
   'use strict';

   angular
       .module('app', ['ui.router'])
       .config(config);

   /** @ngInject */
   function config($stateProvider, $urlRouterProvider)
   {

       $stateProvider
          .state('home', {
              url : '/home',
              templateUrl : 'home.html',
              controller : 'HomeController as hc'
          });

        $urlRouterProvider.otherwise('/home');


   }
})();

/*,
               resolve:{
                   customerList: function (customerFactory){
                       return customerFactory.getAll();
                   }                    
               }*/