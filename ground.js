class Ground {
  constructor(x,y,width,height){
    var options = {
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);  // Add the body you have created to your world.
    this.w= width;
    this.h = height;
    World.add(world,this.body)//  World.add(world you have created, body you want to add);
  }
  
  display(){
    fill("brown");
    var pos=this.body.position;
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.w,this.h);
  }
}