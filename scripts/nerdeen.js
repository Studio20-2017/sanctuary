window.mapIsChanging = false;

console.log('nerdeen');
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
      console.log('1');

      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1917.png');
    }
  });

 $('#map-trigger-2').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('2');
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1946.png');
    }
  });


 $('#map-trigger-3').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      console.log('3');
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1947 - UN Partition Plan.png');
    }
  });

 $('#map-trigger-4').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1948.png');
    }
  });
  
   $('#map-trigger-5').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1967.png');
    }
  });

 $('#map-trigger-6').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
      changeMap('https://studio20-2017.github.io/sanctuary/images/nerdeengraphics/Historic Photo Background/1994-2014.png');
    }
  });
