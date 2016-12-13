(function ()
{
   'use strict';

   angular
       .module('app')
       .controller('HomeController', HomeController);

   function HomeController()
   {
      var hc = this;
      hc.play = true;

      hc.name = 'asdasd';

      hc.muteVideo = function(play){
        if(play){
            $("video").prop('muted', play);
        } else {
            $("video").prop('muted', play);
        }

        hc.play = !hc.play;
      }
    
   }
})();

/*,
               resolve:{
                   customerList: function (customerFactory){
                       return customerFactory.getAll();
                   }                    
               }*/