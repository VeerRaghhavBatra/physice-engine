
// Namespacing - nicknames

const Engine = Matter.Engine; // nickname given to Matter.Engine
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine1,world,ground;
var options;
var box1,box2;

function setup() {
  createCanvas(1000,600);
  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;
  
  // Create a rectangle box body
  //JSON - Javascript Object notation
  box1=new Box(300,100,100,50);   // x,y,width,height
  console.log(box1);
  box2 = new Box(250,250,40,50);
  ground=new Ground(200,390,600,10);
}

function draw() {
  background(0);  
  Engine.update(engine1);
  box1.display();
  box2.display();
  ground.display();
  

}