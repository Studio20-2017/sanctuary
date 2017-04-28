/**
 * Theme Name: Pop Slide
 * Version: 1.0.0
 * Theme URL: http://sequencejs.com/themes/pop-slide/
 *
 * A colorful sliding theme for feature images, with highlighted pagination
 * and drop-in titles.
 *
 * This theme is powered by Sequence.js - The
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  animateCanvasDuration: 350,
  autoPlay: false,
  preloader: true,
  fadeStepWhenSkipped: false,
  moveActiveStepToTop: false,
  keyNavigation: true,
  animateCanvas: true,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);


// when you click another character...
mySequence.animationEnded = function(id, sequence) {
  var isMobile = $(window).width() <= 479;

  // ...pause all the videos
  document.getElementById('video1').pause();
  document.getElementById('video2').pause();
  document.getElementById('video3').pause();
  document.getElementById('video4').pause();
  document.getElementById('video5').pause();
  document.getElementById('video6').pause();

  // ...and then play the video for the character we went to
  if (!isMobile) {
    document.getElementById('video'+id).play();
     if (id == 1) {
      $(".seq-prev").hide();
    } else {
      $(".seq-prev").show();
    }

     if (id == 6) {
      $(".seq-next").hide();
    } else {
      $(".seq-next").show();
    }
    }
    
    if (id == 3) {
      $("#logo2").attr("src", "images/logos/FindingSanctuaryLogoBW.png");
    } else {
       $("#logo2").attr("src", "images/logos/FindingSanctuaryLogo.png");
    }
    
    if (id == 3) {
      $("#leftarrow").attr("src", "images/Left Arrow Black.png");
    } else {
       $("#leftarrow").attr("src", "images/Left Arrow.png");
    }
    
    if (id == 3) {
      $("#rightarrow").attr("src", "images/Right Arrow Black.png");
    } else {
       $("#rightarrow").attr("src", "images/Right Arrow.png");
    }
}


// when the page first loads...
$(function () {
  var isMobile = $(window).width() <= 479;

  // ...automatically start the first video
  if (!isMobile) {
    document.getElementById('video1').play();
    $(".seq-prev").hide();
    $(".seq-next").show();
  }
});


// if the screen is resized to the mobile size, pause all the videos
$(window).resize(function() {
  var isMobile = $(window).width() <= 479;
  if (isMobile) {
    document.getElementById('video1').pause();
    document.getElementById('video2').pause();
    document.getElementById('video3').pause();
    document.getElementById('video4').pause();
    document.getElementById('video5').pause();
    document.getElementById('video6').pause();
  }
});
