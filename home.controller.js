(function ()
{
   'use strict';

   angular
       .module('app')
       .controller('HomeController', HomeController);

   function HomeController()
   {
      var hc = this;
      hc.name = '';
    
   }
})();

/*,
               resolve:{
                   customerList: function (customerFactory){
                       return customerFactory.getAll();
                   }                    
               }*/