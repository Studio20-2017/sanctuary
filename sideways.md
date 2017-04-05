<style>
* {
  margin: 0;
  padding: 0;
  position:fixed;
  bottom:0
}

body {
  background: #000;
  font-family: Georgia;
  font-size: 34px;
  font-style: italic;
  letter-spacing: -1px;
  width: 6000px;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
}

.section {
  margin: 0px;
  bottom: 0px;
  width: 2000px;
  float: left;
  height: 100%;
  text-shadow: 1px 1px 2px #f0f0f0;
}

.section h2 {
  margin: 50px 0px 30px 50px;
}

.section p {
  margin: 20px 0px 0px 50px;
  width: 600px;
}

.black {
  color: #fff;
  background-color:blue;
}

.white {
  color: #000;
  background-color:red;
}

.section ul {
  list-style: none;
  margin: 20px 0px 0px 550px;
}

.black ul li {
  float: left;
  padding: 5px;
  margin: 5px;
  color: #aaa;
}

.black ul li a {
  display: block;
  color: #f0f0f0;
}

.black ul li a:hover {
  text-decoration: none;
  color: #fff;
}

.white ul li {
  float: left;
  padding: 5px;
  margin: 5px;
  color: #aaa;
}

.white ul li a {
  display: block;
  color: #222;
}

.white ul li a:hover {
  text-decoration: none;
  color: #000;
}
</style>

<script>
            $(function() {
              $('ul.nav a').bind('click', function(event) {
                var $anchor = $(this);
             
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');
              
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 1000);
                event.preventDefault();
              });
            });
</script>

<script>
$(function() {
        var elem = $.jInvertScroll(['.sectionblack','.sectionwhite'],        // an array containing the selector(s) for the elements you want to animate
            {
           // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });
        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    });
</script>

<html>
<div class="section black" id="section1">
  <h2>Section 1</h2>
  <ul class="nav">
    <li>1</li>
    <li><a href="#section2">2</a></li>
    <li><a href="#section3">3</a></li>
  </ul>
</div>
<div class="section white" id="section2">
  <h2>Section 2</h2>
  <ul class="nav">
    <li><a href="#section1">1</a></li>
    <li>2</li>
    <li><a href="#section3">3</a></li>
  </ul>
</div>
<div class="section black" id="section3">
  <h2>Section 3</h2>
  <ul class="nav">
    <li><a href="#section1">1</a></li>
    <li><a href="#section2">2</a></li>
    <li>3</li>
  </ul>
</div>
</html>
