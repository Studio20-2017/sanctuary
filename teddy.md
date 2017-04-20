<html>
<head>
  <meta charset="UTF-8">
  <title>Teddy</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>




</head>
<body>
<div class="Row">
  <div class="Column" id="Video-button" class="glow"><button onclick="scroll1()"><span>Video</span></button></div>
  <div class="Column" id="Data-button"><button onclick="scroll2()"><span>Data</span></button></div>
  <div class="Column" id="Threesixty-button"><button onclick="scroll3()"><span>360</span></button></div>
  <div class="Column" id="Video2-button"><button onclick="scroll4()"><span>Video 2</span></button></div>
</div>

<div class="boxes" id="first"><iframe id="player1" src="https://player.vimeo.com/video/212126911" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<h1><div class='tableauPlaceholder' id='viz1492049846565' style='position: relative'><noscript><a href='#'><img alt='Sheet 1 - October 1945 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;N3&#47;N3DNRN6WQ&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='path' value='shared&#47;N3DNRN6WQ' /> <param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;N3&#47;N3DNRN6WQ&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1492049846565');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script></h1></div>
<div class="boxes" id="third"><h1>360</h1></div>
<div class="boxes" id="fourth"><iframe id="player2" src="https://vimeo.com/214062698" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<script>
$(function() {
  var iframe = $('#player1')[0];
  var player = $f(iframe);

  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {        
      player.addEvent('finish', finishVideoOne);
  });

  function finishVideoOne(id) {
    scroll2();
  }
});
</script>


  <script>
// PROGRESS BAR GETS YELLOW WHILE SCROLLING

 $('#first').scrollie({
    direction : 'both',
    scrollOffset : 0,
    scrollRatio : 2,
    scrollingInView : function(){
    $('#Video-button').css("background", "yellow");
    },
  });

 $('#progress-second').scrollie({
    direction : 'both',
    scrollOffset : -500,
    scrollRatio : 2,
    scrollingInView : function(){
    $('#Data-button').css("background", "yellow");
    },
  });

  $('#progress-third').scrollie({
    direction : 'both',
    scrollOffset : -500,
    scrollRatio : 2,
    scrollingInView : function(){
    $('#Threesixty-button').css("background", "yellow");
    },
  });

   $('#progress-fourth').scrollie({
    direction : 'both',
    scrollOffset : -500,
    scrollRatio : 2,
    scrollingInView : function(){
    $('#Video2-button').css("background", "yellow");
    },
  });

 // PROGRESS BAR GETS YELLOW ON CLICK

  function scroll1() {
$('html, body').animate({
    scrollTop: $("#first").offset().top
}, 1000);
$('#Video-button').css("background", "yellow");
}

function scroll2() {
$('html, body').animate({
    scrollTop: $("#second").offset().top
}, 1000);
$('#Data-button').css("background", "yellow");
}

function scroll3() {
$('html, body').animate({
    scrollTop: $("#third").offset().top
}, 1000);
$('#Threesixty-button').css("background", "yellow");
}

function scroll4() {
$('html, body').animate({
    scrollTop: $("#fourth").offset().top
}, 1000);
$('#Video2-button').css("background", "yellow");
}

// PROGRESS BAR DISSAPEARS

// function dissapear() {
// $('.row').on('mouseenter', function() {
// $(this).css('background' , 'opacity 1');
// });
// }

// $('.row').on('mouseleave', function() {
// $(this).css('background' , 'opacity 0');
// });
// }
  </script>


</body>
</html>
