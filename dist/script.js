function setup (){
  pixelDensity(1);
  createCanvas(0, 0, WEBGL);
  colorMode(HSB, 1, 1, 1);
  windowResized();
}

let n, speed, mirror
let init = () => {
  n = floor(random(8, 16));
  speed = random(.4, .7);
  mirror = random() < .5 ? 1 : 2;
}

function draw(){
  background(0);
  
  noStroke();
  directionalLight(0, 0, 1, .5, .5, -1);
  
  let f = frameCount*speed;
  let s = min(width, height)/1200;
  
  for (let j = 0; j < mirror; j++){
    if (j == 1) scale(-1, 1, 1);
    for (let i = 0; i < n; i++){
      fill((i/n)*.3 + .5, .3, 1);
      push();
      rotateZ(i*TAU/n);
      translate(100 + sin(f/50)*100, 0, 0);
      rotateX(f/50);
      rotateY(f/79);
      scale(5*s);
      box(10, 10, 50);
      translate(10, 0, 0);
      rotateX(-f/83);
      box(20, 30, 40);
      translate(20, 20, 20);
      box(5, 5, 90);
      translate(20, 20, 20);
      rotateZ(f/37);
      box(10, 30, 20);
      pop();
    }
  }
}

function mousePressed(){init();}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  init();
}