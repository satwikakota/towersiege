class StoneElastic{
    constructor(body,point2){
        var options= {
            bodyA:body,
            pointB:point2,
            stiffness:0.04,
            length:10
            
        } 
        this.stonelastic= Constraint.create(options); 
        this.point2=point2
        World.add(world,this.stonelastic); 
    }
    display(){ 
        if(this.stonelastic.bodyA!=null){
            push()
            stroke("black"); 
            var posA= this.stonelastic.bodyA.position;
            var posB= this.point2
            if(posA.x<220){
                strokeWeight(7); 
                line(posA.x-25,posA.y-3,posB.x-25, posB.y-3); 
                line(posA.x-25,posA.y,posB.x+30, posB.y-3); 
            }
            else{
                strokeWeight(3); 
                line(posA.x+25,posA.y-3,posB.x-25, posB.y-3); 
                line(posA.x+25,posA.y,posB.x+30, posB.y-3); 
            }
            pop()
        }
    }
    fly(){
        this.stonelastic.bodyA=null
    }
    attach(body){
        this.stonelastic.bodyA=body; 
    }
}
