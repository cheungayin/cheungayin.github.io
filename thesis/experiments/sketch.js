// p5.js sketch

let w = 650;
let h = 650;
// let row = 16; // number of row
// let col= 16; // number of column
var show = false;
// let grid;
let gridX, gridY;

function setup() {
  createCanvas(w, h);
  background("pink");
  strokeWeight(10);
  stroke("255, 100");
  clearButton = createButton("CLEAR");
  // clearButton.position(0 + 10, h + 90);
  clearButton.mousePressed(clean);
  clearButton.style('margin', '5px');
  saveButton = createButton("DOWNLOAD PNG");
  // saveButton.position(w - 120, h + 90);
  saveButton.mousePressed(download);
  saveButton.style('margin', '5px');
  // drawing grid!!
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  // grid = min(width, height) / 16;
  gridX = width / 16;
  gridY = height / 16;


//   // draw rows
//   for (var i = 0; i <= 16; i++) {
//     let x = i * grid;
//     stroke(0);
//     strokeWeight(0.1);
//     line(x, 0, x, height);
//   }
//   // draw columns
//   for (var j = 0; j <= 16; j++) {
//     let y = j * grid;
//     stroke(0);
//     strokeWeight(0.1);
//     line(0, y, width, y);
//   }

  for (var x = 0; x < width; x += gridX) {
      for (var y = 0; y < height; y += gridY) {
  // stroke(0);
  // strokeWeight(0.01);
  // line(x, 0, x, height);
  // line(0, y, width, y);
      }
  }
}

// function draw() {
// 	line(mouseX, mouseY, pmouseX, pmouseY);
// }
// function mouseDragged() {
//   line(mouseX, mouseY, pmouseX, pmouseY);
// }

function draw() {
  if (mouseIsPressed) {
    // let x = snap(mouseX);
    // let y = snap(mouseY);
    let x = snapX(mouseX);
    let y = snapY(mouseY);
    
    if (show == false) {
      noStroke();
    } else {
      stroke(150);
    }
    
    fill("blue");
    square(x, y, gridX);
  }
}

function snapX(value) {
  return Math.floor(value / gridX) * gridX;
}
function snapY(value) {
  return Math.floor(value / gridY) * gridY;
}

// function snap(value) {
//   return Math.floor(value / grid) * grid;
// }

function clean() {
  clear();
  background("pink");
  show = false;
}

function download() {
  saveCanvas("myPixelArt", "png");
}

//option 2: click certain key ("s") to save canvas
function keyPressed(){
  if (key == "s"){
    saveCanvas("myPixelArt", "png")
  }
}