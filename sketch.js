const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,800);
  ground = new Ground(400,800,800,50);
  building = new Building(200,200,50,150);
  circle = new Ball(200,200,50,50);
  paddle = new Ground(400,500,200,50);
  holder = new Rope(circle.body, { x : 200 , y : 200 });
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  building.display();
  circle.display();
  paddle.display();
  holder.display();
}

function mouseDragged() {
  Matter.Body.setPosition(circle.body, { x : mouseX , y : mouseY }); 
}

function mouseReleased() {
  holder.fly();
}