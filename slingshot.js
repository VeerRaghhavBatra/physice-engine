class Slingshot {
 
  constructor(bodyA,bodyB){ 
    var options = {
      bodyA : bodyA,      
      bodyB : bodyB,      
      stiffness : 0.05,
      length : 50

    };

    this.slingsh = Constraint.create(options);
    World.add(world,this.slingsh);
  }

  display(){

    var B1 = this.slingsh.bodyA.position;
    var B2 = this.slingsh.bodyB.position;
    strokeWeight(4);
    line(B1.x,B1.y,B2.x,B2.y);

  }
}

