window.mapIsChanging = false;
$(function() {
  
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
    scrollingInView : function(){
      console.log('1917 photo');

      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1917.jpg');
    }
  });

 $('#map-trigger-2').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('1946 photo');
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1946.jpg');
    }
  });


 $('#map-trigger-3').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('3');
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1947.jpg');
    }
  });

 $('#map-trigger-4').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1948.jpg');
    }
  });
  
   $('#map-trigger-5').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1967.jpg');
    }
  });

 $('#map-trigger-6').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/1994-2014.jpg');
    }
  });

 $('#map-trigger-7').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/Desktop/lastimage.jpg');
    }
  });
})
