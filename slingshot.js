class Slingshot {
 
  constructor(bodyA,pointB){ 
    var options = {
      bodyA : bodyA,      
      pointB : pointB,      
      stiffness : 0.05,
      length : 50

    };
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    this.slingsh = Constraint.create(options);
    this.pointB=pointB
    World.add(world,this.slingsh);
  }

  fly(){
    this.slingsh.bodyA = null;
  }

  display(){
    image(this.sling1,200,20);
    image(this.sling2,170,20);
    if(this.slingsh.bodyA){
      var B1 = this.slingsh.bodyA.position;
      var B2 = this.pointB;
      strokeWeight(4);
      line(B1.x,B1.y,B2.x,B2.y);
    }
    

  }
}

