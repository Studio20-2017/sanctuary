var map;
var campPop;
var tl = 0;
var speed = 1;
var state2camp;

var original_image_width = 2000;
var original_image_height = 1237;

function preload(){
  campPop = loadJSON("camp_population_by_month.json");
  state2camp = loadJSON("state_to_camp.json");
  map = loadImage("us_map-1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  frameRate(2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reScale();
}

// this is a non-p5js function that does some logic for resizing the whole
// canvas based on the screen size such that it does not crop the graphic.
function reScale() {
  var hScale = windowWidth/original_image_width,
      vScale = windowHeight/original_image_height;

  // Figure out which scale is the most appropriate: we dont' want to stretch,
  // so we just pick one)
  var aspect = windowWidth/windowHeight;
  var originalAspect = original_image_width/original_image_height;

  if (aspect < originalAspect) {
    scale(hScale, hScale);
  } else {
    scale(vScale, vScale);
  }
}

function draw() {
  reScale();
   background('#ffffff');
   image(map, 0, 0);

 tl += speed;
  if (tl >= 45){
  tl = 45;
  }
  noStroke();
  fill(255, 0, 0, 120);

  ellipse(150, 340, -campPop[tl]['Tule Lake']/80, -campPop[tl]['Tule Lake']/80);
  ellipse(430, 530, -campPop[tl]['Topaz_Central Utah']/80, -campPop[tl]['Topaz_Central Utah']/80);
  ellipse(315, 745, -campPop[tl]['Poston_Colorado River']/80, -campPop[tl]['Poston_Colorado River']/80);
  ellipse(413, 775, -campPop[tl]['Gila River']/80, -campPop[tl]['Gila River']/80);
  ellipse(780, 625, -campPop[tl].Granada/80, -campPop[tl].Granada/80);
  ellipse(570, 300, -campPop[tl]['Heart Mountain']/80, -campPop[tl]['Heart Mountain']/80);
  ellipse(1180, 840, -campPop[tl].Jerome/80, -campPop[tl].Jerome/80);
  ellipse(200, 580, -campPop[tl].Manzanar/80, -campPop[tl].Manzanar/80);
  ellipse(400, 355, -campPop[tl].Minidoka/80, -campPop[tl].Minidoka/80);
  ellipse(1185, 815, -campPop[tl].Rohwer/80, -campPop[tl].Rohwer/80);

  push();
  stroke(0);
  fill(0);
  text(campPop[tl]['Tule Lake'], 150, 340);
  text(campPop[tl]['Topaz_Central Utah'], 430, 530);
  text(campPop[tl]['Poston_Colorado River'], 315, 745);
  text(campPop[tl]['Gila River'], 413, 775);
  text(campPop[tl].Granada, 780, 625);
  text(campPop[tl]['Heart Mountain'], 570, 300);
  text(campPop[tl].Jerome, 1180, 840);
  text(campPop[tl].Manzanar, 200, 580);
  text(campPop[tl].Minidoka, 400, 355);
  text(campPop[tl].Rohwer, 1185, 815);
	pop();
  //
  push();
  textSize(40);
  fill(0);
  text(campPop[tl].Date, width/2, 40);
  pop();


  push();
  strokeWeight(0.2);
  stroke(255);
  noFill();
  //az()
  //AZ TO POSTON
  for (var i = 400; i <= state2camp[0].Poston/10+400; i++){
    curve(600, 0, i, 650, 315,745, 200, 600);
  }
  //az to Gila River
  for (var j = 400; j <= state2camp[0]["Gila River"]+400; j++){
    curve(200, 500, j, 650, 413, 775, 200, height);
  }
  //ca2topaz
  for (var ca2t = 500; ca2t <= state2camp[1].Topaz/100+500; ca2t++){
    //line(120, ca2t, 430, 530);
    curve(300, 1000, 100, ca2t, 430, 530, 800, 1000);
  }
  //catoposton
  for(var ca2p = 500; ca2p <= state2camp[1].Poston/100+500; ca2p++){
    curve(100, 0, 100, ca2p, 315, 745, 800, 0);
  }
  //catogila
  for (var ca2gila = 500; ca2gila <= state2camp[1]['Gila River']/100+500; ca2gila++){
    curve(300, 0, 100, ca2gila, 413, 775, 700, 500);
  }
  //granada
  for (var ca2gra = 500; ca2gra <= state2camp[1].Granada/100+500; ca2gra++){
    curve(0, 800, 100, ca2gra, 780, 625, 800, 800);
  }
  //heart mountain
  for (var ca2hm = 500; ca2hm <= state2camp[1]['Heart Mountain']/100+500; ca2hm++){
    curve(100, 800, 100, ca2hm, 570, 300, 600, 400);
  }
  //jerome
  for (var ca2jm = 500; ca2jm <= state2camp[1].Jerome/100+500; ca2jm++){
    curve(100, 200, 100, ca2jm, 1180, 840, 1500, 800);
  }
  //ca2manzanar
  for (var ca2mz = 500; ca2mz <= state2camp[1].Manzanar/100+500; ca2mz++){
    line(100, ca2mz, 200, 580);
  }
  //ca2minidoka
  for (var ca2mini = 500; ca2mini <= state2camp[1].Minidoka/50+500; ca2mini++){
    line(100, ca2mini, 400, 355);
  }
  //ca2rohwer
  for (var ca2rw = 500; ca2rw <= state2camp[1].Rohwer/100+500; ca2rw++){
    curve(100, 800, 100, ca2rw, 1185, 815, 1200, 1000);
  }
  //ca2tule lake
  for (var ca2tl = 500; ca2tl <= state2camp[1]['Tule Lake']/100+500; ca2tl++){
    curve(150, 600, 100, ca2tl, 150, 340, 200, 400);
  }

  //hi2topaz
  for (var hi2tp = 500; hi2tp <= state2camp[2].Topaz/20+500; hi2tp++){
    curve(400, 1200, hi2tp, 1100, 430, 530, 350, 600);
  }
  //hi2jerome
  for (var hi2jm = 500; hi2jm <= state2camp[2].Jerome/20+500; hi2jm++){
    curve(200, 1000, hi2jm, 1100, 1180, 840, 1200, 600);
  }
  //or2hm
  for (var or2hm = 120; or2hm <= state2camp[3]['Heart Mountain']/10+120; or2hm++){
    curve(0, 300, or2hm, 200, 570, 300, 600, 400);
  }
  //or2mini
  for (var or2mini = 120; or2mini <= state2camp[3].Minidoka/50+120; or2mini++){
    curve(0, 0, or2mini, 200, 400, 355, 500, 100);
  }
  //or2tule lake
  for (var or2tl = 120; or2tl <= state2camp[3]['Tule Lake']/50+120; or2tl++){
    curve(200, 100, or2tl, 200, 150, 340, 200, 400);
  }
  //washington to gila river
  for (var wa2gl = 200; wa2gl <= state2camp[4]['Gila River']/5+200; wa2gl++){
    curve(0, 0, wa2gl, 100, 413, 775, 0, height);
  }
  //wa to heart mountain
  for (var wa2hm = 200; wa2hm <= state2camp[4]['Heart Mountain']/20+200; wa2hm++){
    curve(0, 0, wa2hm, 100, 570, 300, width/2, height/2);
  }
  //wa to manzanar
  for (var wa2mz = 200; wa2mz <= state2camp[4].Manzanar/20+200; wa2mz++){
    curve(width/2, 0, wa2mz, 100, 200, 580, width/2, height);
  }
  //wa to minidoka
  for (var wa2mini = 200; wa2mini <= state2camp[4].Minidoka/80+200; wa2mini++){
    curve(0, 0, wa2mini, 100, 400, 355, 300, 800);
  }
  //wa to tule lake
  for (var wa2tl = 200; wa2tl <= state2camp[4]['Tule Lake']/80+200; wa2tl++){
    curve(width/2, 0, wa2tl, 100, 150, 340, width/2, height/2);
  }

  pop();

  push();
  textSize(20);
  fill(255);
  text("California", 150, 600);
  text("Arizona", 450, 700);
  text("Utah", 450, 500);
  //text("Oregan", 170, 250);
  //text("Washington", 220, 100);
  text("Idaho", 370, 270);
  text("Wyoming", 650, 400);
  text("Colorado", 680, 600);
  text("Arkansas", 1130, 800);
  pop();
}
