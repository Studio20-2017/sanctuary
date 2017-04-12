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
  // ...pause all the videos
  document.getElementById('video1').pause();
  document.getElementById('video2').pause();
  document.getElementById('video3').pause();
  document.getElementById('video4').pause();
  document.getElementById('video5').pause();
var audio1 = document.getElementById("audio1");
		audio1.pause()
		audio1.currentTime = 0;
var audio2 = document.getElementById("audio2");
		audio2.pause()
		audio2.currentTime = 0;
var audio3 = document.getElementById("audio3");
		audio3.pause()
		audio3.currentTime = 0;
var audio4 = document.getElementById("audio4");
		audio4.pause()
		audio4.currentTime = 0;
var audio5 = document.getElementById("audio5");
		audio5.pause()
		audio5.currentTime = 0;
var audio6 = document.getElementById("audio6");
		audio6.pause()
		audio6.currentTime = 0;

  // ...and then play the video for the character we went to
  document.getElementById('video'+id).play();
  var audio = document.getElementById("audio"+id);
   audio.play();
}


// when the page first loads...
$(function () {
  // ...automatically start the first video
  document.getElementById('video1').play();
  document.getElementById('audio1').play();
})
