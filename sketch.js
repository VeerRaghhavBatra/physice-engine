
// Namespacing - nicknames

const Engine = Matter.Engine; // nickname given to Matter.Engine
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine1,world,ground;
var options;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine1 = Engine.create(); // Matter.Engine.create();
  world = engine1.world;
  
  // Create a rectangle box body
  //JSON - Javascript Object notation
  box1=new Box(700,320,70,70);   // x,y,width,height
  box2 = new Box(920,320,70,70);
  pig1= new Pig(810,350);
  log1 = new Log(810,260,300,PI/2)
  box3=new Box(700,240,70,70);   // x,y,width,height
  box4 = new Box(920,240,70,70);
  pig2= new Pig(810,220);
  log2 = new Log(810,180,300,PI/2)
  ground=new Ground(600,390,1200,20);
  box5 = new Box(810,160,70,70);
  log3 = new Log(748,120,150,PI/7)
  log4 = new Log(882,120,150,-PI/7)
  bird = new Bird(100,100)
}

function draw() {
  background(0);  
  Engine.update(engine1);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  
  

}