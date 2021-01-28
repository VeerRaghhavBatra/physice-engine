class Box {
  constructor(x,y,width,height){
    var options = {
      restitution : 1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);  // Add the body you have created to your world.
    this.w= width;
    this.h = height;

    World.add(world,this.body)//  World.add(world you have created, body you want to add);
  }

  display(){
    var pos=this.body.position;
    push();
    translate(this.body.position.x,this.body.position.y);

    //angleMode(RADIANS);
    rotate(this.body.angle);
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop ();
  }
}
