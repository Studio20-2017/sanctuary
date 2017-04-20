<html>
<head>
  <meta charset="UTF-8">
  <title>Henry</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>

</head>
<body>
<div class="Row">
  <div class="Column" id="Video-button"><button onclick="scroll1()"><span>Video</span></button></div>
  <div class="Column" id="Data-button"><button onclick="scroll2()"><span>Data</span></button></div>
  <div class="Column" id="Threesixty-button"><button onclick="scroll3()"><span>360</span></button></div>
  <div class="Column" id="Video2-button"><button onclick="scroll4()"><span>Video 2</span></button></div>
</div>

<div class="boxes" id="first"><iframe id="player1" src="https://player.vimeo.com/video/212126446" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<div class="boxes" id="second"><h1>DATA VIZ</h1></div>
<div class="boxes" id="third"><iframe id="player2" src="https://player.vimeo.com/video/214051232" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
<div class="boxes" id="fourth"><h1>VIDEO</h1></div>
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
