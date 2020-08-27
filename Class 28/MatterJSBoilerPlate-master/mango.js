class Mango{
    constructor(x,y){
        var options= {
            isStatic:true, 
            restitution:0,
            friction:0.01,
        } 
        this.image=loadImage("sprites/sprites/mango.png"); 
        this.body = Bodies.circle(x,y,25,options);
        this.radius= 50
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("yellow");
        fill("yellow");
        image(this.image,0,0,this.radius,this.radius);
        pop(); 
    }

}