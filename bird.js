class Bird {
  constructor(x,y){
    var options = {
      restitution : 0.8,
      friction :1.0,
      density : 1.0
    }
    this.body = Bodies.rectangle(x,y,50,50,options);  // Add the body you have created to your world.
    this.w= 50;
    this.h = 50;

    World.add(world,this.body)//  World.add(world you have created, body you want to add);
  }

  display(){
    var pos=this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    push();
    translate(this.body.position.x,this.body.position.y);

    //angleMode(RADIANS);
    rotate(this.body.angle);
    strokeWeight(5);
    stroke("green");
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop ();
  }
}
