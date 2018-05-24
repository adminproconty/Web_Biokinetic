
$(document).ready( function () {


  /*-------------------------------------------------*/
  /* =  video 
  /*-------------------------------------------------*/

    jQuery(function(){
      if (self.location.href == top.location.href){
          // var logo=$("<a href='http://pupunzi.com/#mb.components/components.html' style='position:absolute;top:0;z-index:1000'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>");
          // $("#wrapper").prepend(logo);
          // $("#logo").fadeIn();
      }


      $('#bgndVideo').on("YTPStart",function(e){
         var currentTime = e.time;
      //    $("#pause").show();
      //    $("#play").hide();
         $('.mbYTP_wrapper').removeClass('active');

      });

      $('#bgndVideo').on("YTPUnstarted",function(e){
         var currentTime = e.time;
         // $("#pause").hide();
         // $("#play").show();
         $('.mbYTP_wrapper').addClass('active');
      });
      // $('#bgndVideo').on("YTPPause",function(e){
      //    var currentTime = e.time;
      //    $("#pause").hide();
      //    $("#play").show();
      // });
      
      //debug functions
      jQuery("#bgndVideo").on("YTPStart", function(){
          jQuery("#eventListener").html("YTPStart");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          jQuery("#eventListener").append(" :: (quality= "+ jQuery("#bgndVideo").getPlayer().getPlaybackQuality()+")");
      });
      jQuery("#bgndVideo").on("YTPLoop", function(e){
          jQuery("#eventListener").html("YTPLoop");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          jQuery("#eventListener").append(" :: "+ e.counter);
      });
      jQuery("#bgndVideo").on("YTPEnd", function(){
          jQuery("#eventListener").html("YTPEnd");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
          console.debug("YTPEnd")
      });
      jQuery("#bgndVideo").on("YTPPause", function(){
          jQuery("#eventListener").html("YTPPause");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
      });
      jQuery("#bgndVideo").on("YTPBuffering", function(){
          jQuery("#eventListener").html("YTPBuffering");
          jQuery("#eventListener").append(" :: (state= "+ jQuery("#bgndVideo").getPlayer().getPlayerState()+")");
      });

      jQuery(".player").mb_YTPlayer({
          onReady: function(){
              jQuery("#eventListener").append(" (Player is ready)");
          }
      });
    });
});
