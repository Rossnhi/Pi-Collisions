var ground = 400;
var wall = 15;
var clack;
var collisions = 0;
var digits;
var timeSpeed;
var clackSound;
var cube1;
var cube2;
var slider;
var digstr = "5";
var p2

function preload(){
  clack = loadSound('https://rossnhi.github.io/Pi-Collisions/click.wav'); 
}

function setup() {
  var h1 = createElement("h1","Pi Collisions");
  
  var p1 = createP("This is the most inefficient, yet perhaps the most elegant way to calculate the digits of Pi.");
  p1.style("font-size", "18pt");
  p1.style("background-color", "pink");
  p1.style("padding", "4px");
  
  p2 = createP("Choose the number of digits you want to compute: " + digstr);
  
  slider = createSlider(1, 9, 5);
  
  createP("");

  var canvas = createCanvas(750, 550);    
  
  createA("https://raw.githubusercontent.com/Rossnhi/Pi-Collisions","Source Code");
  
createP("");
  
createA("https://www.maths.tcd.ie/~lebed/Galperin.%20Playing%20pool%20with%20pi.pdf", "Click here for the research paper that was published on Pi Collisions.");
  
  startOver();
  
  slider.changed(startOver);
  
}

function draw() {
  digstr = str(slider.value());
  p2.html("Choose the number of digits you want to compute: " + digstr);
  
  background(200);
  clackSound = false;
  
  fill(50);
  noStroke();
  rect(0, ground, width, height - ground);
  
  fill(50);
  rect(0, 0, wall, ground);
  
  for (var i = 0; i <= timeSpeed; i++){
    cube1.ricochet(cube2);
    
    cube1.hitWall();
    
    cube1.move();
    cube2.move();
  }
  fill(0);
  textFont("Georgia", 24);
  text("Collisions: " + collisions, 270, 50);
  
  cube1.show();
  cube2.show();
  
  if (clackSound){
    clack.play(); 
  }
  
}

function startOver(){
  digits = slider.value();
  if (digits <= 5) {
    timeSpeed = 10 ** (digits - 2);
  }
  else {
    timeSpeed = 10 ** (digits - 3); 
  }
  cube1 = new Cubes(200, 75, 1, 0, wall);
  cube2 = new Cubes(400, 150, 100 ** (digits - 1), -1/timeSpeed, wall + 75);
  collisions = 0;
}
