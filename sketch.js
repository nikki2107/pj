var car,wall;
var car1,wall1;
var car2,wall2;
var car3,wall3;

var speed,weight;

function setup() {
  createCanvas(400,400);
  background(220);
  car = createSprite(200, 0, 100, 100);
  car.velocityX = speed;
  wall = createSprite(100,200,60,height/2)

  speed=random(55,90)
  weight=random(400,1500)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}