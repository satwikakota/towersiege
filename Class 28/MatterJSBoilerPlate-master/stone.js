class Stone{
    constructor(x,y){
        var options= {
            isStatic:true, 
            restitution:0,
            friction:1,
            density:1.2
        } 
        this.image=loadImage("sprites/sprites/stone.png"); 
        this.body = Bodies.circle(x,y,70,options);
        this.radius= 70
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("black");
        image(this.image,0,0,this.radius,this.radius);
        pop();
        
    }

}
