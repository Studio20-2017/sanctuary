<html>
<head>
  <meta charset="UTF-8">
  <title>Rosa</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.css" />
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.4/jquery.fullpage.min.js"></script>


</head>
<body>


<div class="Row">
  <div class="Column" id="Video-button"><a href="#firstSlide"><span class="glow">Video</span></a></div>
  <div class="Column" id="Data-button"><a href="#secondSlide"><span class="glow">Data</span></a></div>
  <div class="Column" id="Threesixty-button"><a href="#thirdSlide"><span class="glow">360</span></a></div>
  <div class="Column" id="Video2-button"><a href="#fourthSlide"><span class="glow">Video 2</span></a></div>
</div>

<div id="logo2">
	<a href="https://studio20-2017.github.io/sanctuary/"><img src="images/logos/logo_t.png"></a>
</div>


<div id="fullpage">
	<div class="boxes section" id="first" data-menuanchor="firstSlide">
  	    <iframe id="player1" src="https://player.vimeo.com/video/210800050?api=1&player_id=player1" width="100%" height="100%" 		frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
	</div>
	<div class="boxes section" id="second" data-menuanchor="secondSlide"><h1 id="progress-second">DATA VIZ</h1></div>
	<div class="boxes section" id="third" data-menuanchor="thirdSlide"><h1 id="progress-third">360</h1></div>
	<div class="boxes section" id="fourth" data-menuanchor="fourthSlide"><h1 id="progress-fourth">VIDEO 2</h1></div>
</div>
	
	
<script>
$(function() {
  $('#fullpage').fullpage({
	anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
	afterLoad: function(anchorLink, index){
		if (index == 1) {
		    $('#Video-button').css("background", "yellow");
		}
		if (index == 2) {
		    $('#Video-button').css("background", "yellow");
		    $('#Data-button').css("background", "yellow");
		}
		if (index == 3) {
		    $('#Video-button').css("background", "yellow");
		    $('#Data-button').css("background", "yellow");
		    $('#Threesixty-button').css("background", "yellow");
		}
		if (index == 4) {
		    $('#Video-button').css("background", "yellow");
		    $('#Data-button').css("background", "yellow");
		    $('#Threesixty-button').css("background", "yellow");
		    $('#Video2-button').css("background", "yellow");
		}
	}
  });

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
// PROGRESS BAR DISSAPEARS

var mouseStillTimer;

$('body').on('mousemove', function() {
  window.clearTimeout(mouseStillTimer);

  $('.Row').fadeIn(600);
 
  mouseStillTimer = window.setTimeout(function() {
    $('.Row').fadeOut(600);
   }, 3000);
});


  </script>


</body>
</html>
