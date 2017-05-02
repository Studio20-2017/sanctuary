<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nerdeen</title>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Oswald|Quattrocento+Sans|Raleway" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <script src="scripts/jquery.min.js"></script>
  <script src="scripts/jquery.scrollie.min_1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://f.vimeocdn.com/js/froogaloop2.min.js"></script>

</head>

<body>

<a href="home.html"><img id="logo2" src="images/logos/FindingSanctuaryLogo.png"></a>

<div class="boxes" id="first">
 <div class="video">
 <iframe id="player1" src="https://player.vimeo.com/video/212149595?api=1&player_id=player1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
 </div>
</div>


<div class="boxes" id="second">
<script src="https://studio20-2017.github.io/sanctuary/scripts/jquery.min.js"></script>
<script src="https://studio20-2017.github.io/sanctuary/scripts/jquery.scrollie.min_1.js"></script>
<script src="https://studio20-2017.github.io/sanctuary/scripts/nerdeen.js"></script>
<link rel="stylesheet" type="text/css" href="https://studio20-2017.github.io/sanctuary/styles/charstyle.css">
  <div id="map">
  </div>

  <div id="txt">

    <div id="map-trigger-1" class="map-trigger"></div>
<h2>1917: The British Mandate</h2>
<p>Before 1917, Jewish people comprised less than 10 percent of Palestine. In 1917, the British government declared their support for a Jewish homeland in Palestine in a document known as the Balfour Declaration, stating, “it being clearly understood that nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine.” Incorporated in the British Mandate, the document would lay the foundation for creation of the state of Israel.
British troops occupied Palestine in 1917. From 1920 to 1948, the British civil administration ruled the region in the British Mandate.</p>
    <div id="map-trigger-2" class="map-trigger"></div>
<h2>1946: Jewish settlers take root</h2>
<p>After 1920, the British Mandate encouraged Jewish settlers to immigrate from Europe. By 1946, Jewish people comprised about 33 percent of Palestine, and Zionist Jews controlled 6 percent of historic Palestine. </p>

    <div id="map-trigger-3" class="map-trigger"></div>
  <h2>1947: The UN Proposal</h2>
  <p>In 1947, the UN proposed a partition plan that granted 55 percent of historic Palestine to a Jewish state, and 45 percent to a non-contiguous Arab state. Jerusalem would get special international status. Palestinian Arabs condemned this plan because it took away much of the land that was previously in their control.</p>

    <div id="map-trigger-4" class="map-trigger"></div>
 <h2>1948: Arab-Israeli War</h2>
 <p>A ten-month war broke out between Israel and Arab states. It ended with Israeli victory, and more territory of historic Palestine went to Israel.</p>

    <div id="map-trigger-5" class="map-trigger"></div>
    <h2>1967: Six-Day War</h2>
  <p> Also known as the June War, fought between Israel with Egypt, Jordan, and Syria after tensions built between Israel and Syria. A decisive victory for Israel, it expanded into the West Bank, Gaza Strip, Sinai Peninsula in Egypt and the Golan Heights from Syria. Israeli occupied 100 percent of historic Palestine. 300,000 Palestinians were expelled out of the West Bank, and 100,000 Syrians became refugees. Across the Arab world, Jewish minority communities were expelled, with refugees going to Israel or Europe.</p>

  <div id="map-trigger-6" class="map-trigger"></div>
  <h2>1994 - Today</h2>
  <p> Today, there are more than 6 million Palestinian refugees, comprising one of the largest refugee populations in history. About 1 in 3 refugees are Palestinian. From 1994 to today, Israel occupies much of Palestinian territory. </p>

    <div id="map-trigger-7" class="map-trigger"></div>

<h1 style="color:#8baaad;">Shifting borders</h1>
<p>After the 1948 war with Israel, 85 percent of the Palestinian population were expelled from their homes in the area that would become Israel – leaving 700,000 to 750,000 Palestinians in  refugee camps across Syria, Lebanon, Egypt, and other parts of Palestine in the West Bank and Gaza Strip. In 1967, the Six-Day-War forced 280,000 to 325,000 Palestinians on an exodus outside of Israeli captured territories – including Nerdeen’s father, who was forced out of his village of Beit Iksa to Jordan, where he met Nerdeen’s mother.
<br>
Currently, Israel occupies much of Palestinian territory – meaning Palestinians living under Israeli occupation can’t enjoy rights of citizenship, such as voting or making decisions that impact their lives. Under Israeli occupation, Palestinians don’t control the flow of goods, access to electricity and water is limited, and travel is restricted within occupied territories. International leaders warn that occupation threatens the idea of a peaceful, two-state solution for the two countries. </p>

<h2>Settlements</h2>

<p>Israeli settlements are housing units inhabited by Israeli citizens, built within regions the International community recognizes as Palestinian territory.
<br>
Settlements are rapidly expanding. In January 2014, Israel said it plans to build 2,500 new settlement homes in the West Bank. In April 2017, Israeli government approved of 212 new settler units in East al-Quds.
<br>
In January, 70 countries met in Paris to issue a warning: that expansion of settlements threaten a two-state peace solution.
<br>
“The two-state solution, which the international community has agreed on for many years, appears threatened,” President François Hollande of France said. “It is physically threatened on the ground by the acceleration of settlements, it is politically threatened by the progressive weakening of the peace camp, it is morally threatened by the distrust that has accumulated between the parties, and that has certainly been exploited by extremists.”
<br>
As new settlements sprout up across the region, they give impetus to disperse Israeli police forces across Palestinian territory, making the implementation of two separate states with defined borders difficult to execute.
 <br>
The Obama administration condemned further expansion. Trump staunchly supported Israel during his campaign for presidency. There’s reason to believe that Trump administration supported settlement expansion. Jared Kushner, Trump’s senior advisor and son-in-law, donated $58,500 to expanding Israeli settlements in the West Bank between 2011 and 2013, according to the Washington Post.
<br>
However, Trump recently said settlements “don’t help the process,” and he doesn’t believe that “going forward with these settlements is a good thing for peace.”  </p>
<br>





</div><!--txt-->
</div><!--boxes second-->
<div id="footer">
  <p id="footertext"><a href="rosa.html"> FOLLOW ROSA'S JOURNEY &rarr; </a></p>
</div>

<!--Autoscroll to box "second" after the video is over-->
<script>
$(function() {
  var iframe = $('#player1')[0];
  var player = $f(iframe);
  <!--When the player is ready, add listeners for pause, finish, and playProgress-->

  player.addEvent('ready', function() {
      player.addEvent('finish', finishVideoOne);
  });
 function finishVideoOne(id) {
$('html, body').animate({
    scrollTop: $("#second").offset().top
}, 1000);}
});
</script>

</body>
</html>
