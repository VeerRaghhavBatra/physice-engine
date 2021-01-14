
// Namespacing - nicknames

const Engine = Matter.Engine; // nickname given to Matter.Engine
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine1,world,ground;
var options;
var ball,balloptions;

function setup() {
  createCanvas(800,400);
  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;
  
  // Create a rectangle box body
  //JSON - Javascript Object notation

  var options = {
      isStatic : true
  }
  var balloptions = {
    restitution : 1.0
}
  ground = Bodies.rectangle(400,390,800,20,options);  // Add the body you have created to your world.
  ball = Bodies.circle(400,100,40, balloptions);  // Add the body you have created to your world.
  
 World.add(world,ball)
 World.add(world,ground)//  World.add(world you have created, body you want to add);
  }

function draw() {
  background(0);  
  Engine.update(engine1);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40,40);

}