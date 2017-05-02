window.mapIsChanging = false;
$(function() {
  
function isMobile() {
  return $(window).width() <= 479;
}
  
console.log('nerdeen loaded');
function changeMap(newImage) {
  if (!mapIsChanging) {
    console.log("changing #map to "+newImage);
    window.mapIsChanging = true;
    $('#map').css("background-image", "url('"+newImage+"')");
    setTimeout(function() {
      window.mapIsChanging=false;
    }, 1010);
  }
}

$('#map-trigger-1').scrollie({
    direction : 'up',
    scrollOffset : 0,
    scrollRatio : 2,
    height: 0 !important;
    scrollingInView : function(){
      console.log('1917 photo');
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1917.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1917.png');
      }
    }
  });

 $('#map-trigger-2').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('1946 photo');
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1946.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1946.png');
      }
    }
  });


 $('#map-trigger-3').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('3');
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1947.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1947.png');
      }
    }
  });

 $('#map-trigger-4').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1948.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1948.png');
      }
    }
  });
  
   $('#map-trigger-5').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1967.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1967.png');
      }
    }
  });

 $('#map-trigger-6').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/1994 - 2014.png');
        $("#logo2").show();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1994 - 2014.png');
      }
    }
  });

 $('#map-trigger-7').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      if (isMobile()) {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Mobile/lastimage.jpg');
        $("#logo2").hide();
      } else {
        changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/lastimage.jpg');
      }
    }
  });
})
