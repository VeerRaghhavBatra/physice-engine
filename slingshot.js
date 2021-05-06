class Slingshot {
 
  constructor(bodyA,pointB){ 
    var options = {
      bodyA : bodyA,      
      pointB : pointB,      
      stiffness : 0.05,
      length : 50

    };

    this.slingsh = Constraint.create(options);
    this.pointB=pointB
    World.add(world,this.slingsh);
  }

  fly(){
    this.slingsh.bodyA = null;
  }

  display(){
    if(this.slingsh.bodyA){
      var B1 = this.slingsh.bodyA.position;
      var B2 = this.pointB;
      strokeWeight(4);
      line(B1.x,B1.y,B2.x,B2.y);
    }
    

  }
}

