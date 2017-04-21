<html>
<head>
  <meta charset="UTF-8">
  <title>Jesus</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>

</head>
<body>

<div class="boxes" id="first"><iframe id="player1" src="https://player.vimeo.com/video/211955060" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
<div class="boxes" id="second"><h1>DATA VIZ</h1></div>
<div class="boxes" id="third"><h1>360</h1></div>
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

</body>
</html>
