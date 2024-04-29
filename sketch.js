let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for(i = 0; i < 50; i ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    walkers[i] = new Walker(x, y, r, g, b);
  }
}

function draw() {
  for(x = 0; x < walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
  }

}

class Walker {

  constructor(x, y, r, g, b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  step(){
    this.x += random(-10, 10);
    this.y += random(-2, 2);
  }

  show(){
    strokeWeight(2);
    stroke(this.r, this.g, this.b);
    point(this.x, this.y);
  }

  
}