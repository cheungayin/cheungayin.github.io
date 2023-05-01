let s = 100; // size of pokeball
let x = 50; // x-coordinate starts at 50
let y = 50 ; // y-coordinate starts at 50
let vx = 10; // velocity in x-direction
let vy = 9; // velocity in y-direction

let pokeball; // create an image

function preload(){
  pokeball = loadImage('pokeball.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  pokeball.resize(s,s)
  image(pokeball, x, y);
  // circle(x, y, 50);
  // ellipseMode(CORNER);
  
  // ellipse(x,y,d);
  x = x + vx; // updating the x-coordinate
  y = y + vy; // updating the y-coordinate
  // d = d + 1;
  // d++
  
  // boundary-checking - ball change direction once it hits the "wall"
  
  // console.log(pokeball.width);

  if (x + pokeball.width/2 >= windowWidth || x - pokeball.width/2 <= 0){
    vx = -vx;
  }
  if (y + pokeball.height/2 >= windowHeight || y - pokeball.height/2 <= 0){
    vy = -vy;
  }
  
  // if (y ==100){
  //   y = 0;
  //   x = 0; 

  // console/log(vx);
  // circle(200, 200, 50);
}