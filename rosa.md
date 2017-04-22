<html>
<head>
  <meta charset="UTF-8">
  <title>Rosa</title>
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>
</head>
<body>


<div class="boxes" id="first">
<div class="video">
<iframe id="player1" src="https://player.vimeo.com/video/210800050?api=1&player_id=player1" width="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
</div>
</div>

<div id="second">
<h1>How (some) Jewish refugees made it to the US after WWII</h1>
<p>Immediately after the war ended, <a href="https://www.ushmm.org/wlc/en/article.php?ModuleId=10005418" target="_blank">over 50,000 displaced Jews</a> were scattered throughout Germany, Austria and Italy. Rosa, the only member of her immediate family to survive the Holocaust, was among them. With no home to return to, she spent several years attempting to travel to Palestine, where she had relatives. However, in the years leading up to the formation of the State of Israel in 1948, the British strictly limited Jewish immigration to the region. </p>
<div class="audioboxred">
<audio id="clip1">
<source src="audio/rosa_israel.mp3" type="audio/mp3">
</audio>
<img class="play" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" onclick="play1()">

<p class="audioquotewhite">"I wanted to go to Israel. But there was a war in Israel."</p>
</div>

<p> Rosa escaped the Nazis while being transported from Auschwitz to another concentration camp; she spent the remainder of the war in Hungary, where she lived under an assumed identity. After V-Day, on May 8, 1945,  she returned to Germany, and ended up in the Landsberg displaced person (DP) camp--a former concentration camp. She waited there for what she believes was about two years, hoping for an opportunity to immigrate to Israel.</p>

<p>In June 1945, the U.S. sent Earl G. Harrison, a government official, to investigate the situation of Jewish DPs throughout Germany and Austria. The resulting <a href="https://www.ushmm.org/exhibition/displaced-persons/resourc1.htm" target="_blank">report</a> brought to light the harsh conditions in the Allied-run camps. “We appear to be treating the Jews as the Nazis treated them,” Harrison wrote, “except that we do not exterminate them.”</p>
<div class="audioboxwhite" style="float: right;">
<audio id="clip2">
<source src="audio/rosa_auschwitz.mp3" type="audio/mp3">
</audio>
<img class="play" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" onclick="play2()">

<p class="audioquotered">"I was very unhappy there, but it wasn't Auschwitz."</p>
</div>
<br>
<p style="clear: right">While in Landsburg, Rosa, by this point in her late teens, kept busy working as a nurse in a nearby hospital. As Rosa recalls, an American woman working in the camp advocated on the behalf of her and other Jewish orphans to President Truman, eventually securing for them a limited number of visas to the U.S. It hadn’t been her plan to come to America, but Rosa saw it as the best offer she had, and accepted. </p>
<div class="audioboxred">
<audio id="clip3">
<source src="audio/rosa_america.mp3" type="audio/mp3">
</audio>
<img class="play" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" onclick="play3()">

<p class="audioquotewhite">"From Auschwitz to America."</p>
</div>
<p>Rosa arrived in New York on the S.S. Ernie Pyle. She was 18 years old, and had no family in America. But she had been given a rare opportunity.</p>

<p>The <a href="http://www.jewishvirtuallibrary.org/president-truman-statement-and-directive-on-displaced-persons-december-1945" target="_blank">1945 Truman Directive</a> gave preference for entry to the U.S. to displaced persons, but did not expand existing immigration quotas. Approximately <a href="https://www.ushmm.org/learn/timeline-of-events/1942-1945/truman-directive-on-immigrant-visas" target="_blank">22,950 DPs</a> were admitted to the U.S. over the ensuing two years. Two-thirds of them were Jewish. </p>                        

<p>By 1947, with more Jews fleeing anti-Semitism in Eastern Europe, the population of Jews living in DP camps grew to <a href="https://www.ushmm.org/outreach/en/media_nm.php?MediaId=377" target="_blank">250,000</a>.</p>

<p>The <a href="http://library.uwb.edu/Static/USimmigration/1948_displaced_persons_act.html" target="_blank">Displaced Persons Act of 1948</a> ultimately authorized the entry into the U.S. of about 400,000 DPs, again within the existing quotas. But the act was <a href="http://www.presidency.ucsb.edu/ws/?pid=12942" target="_blank">criticized</a> by President Truman himself as discriminating against Jewish refugees -- restrictions made it so that, as Truman wrote, more than 90 percent of Jewish DPs were not eligible for visas.</p>

<p>Overall, about <a href="https://books.google.com/books?id=raS9TqUFb94C&pg=PA161&lpg=PA161&dq=how+many+jews+admitted+to+us+truman+directive&source=bl&ots=T8p8Z4vFwn&sig=Hq2_M40C4SQjCOjHDgvcQLmLFRI&hl=en&sa=X&ved=0ahUKEwiyzvCkpKfTAhXoxYMKHeIfBggQ6AEISDAG#v=onepage&q=how%20many%20jews%20admitted%20to%20us%20truman%20directive&f=false" target="_blank">16 percent</a> of the DPs admitted into the U.S. between 1946 and 1952 were Jewish.</p>

</div>

<h2>Immigration Debate, 1948</h2>
[CAROUSEL TK]

<div id="third">
</div> 
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

var mouseStillTimer;

$('body').on('mousemove mousewheel DOMMouseScroll MozMousePixelScroll', function() {
  window.clearTimeout(mouseStillTimer);

  $('.Row').fadeIn(300);
 
  mouseStillTimer = window.setTimeout(function() {
    $('.Row').fadeOut(600);
   }, 1500);
});


  </script>

<script>
function play1(){
       var audio = document.getElementById("clip1");
       audio.play();
                 }
function play2(){
       var audio = document.getElementById("clip2");
       audio.play();
                 }
function play3(){
       var audio = document.getElementById("clip3");
       audio.play();
                 }
</script>
<script>
$('.carousel').carousel({
    pause: true,
    interval: false,
});
</script>
</body>
</html>
