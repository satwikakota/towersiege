class Bird {

    //constructor() :inbuilt function
    //constructor consists of properties
    constructor(x, y) {
        var option = {
            restitution: 0.2,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, option);
        this.width = 50;
        this.height = 50;
        World.add(engineWorld, this.body);
    }

    display() {
        position=this.body.position; 
        position.x=mouseX; 
        position.y=mouseY; 
        push(); 
        translate(this.body.position.x,this.body.position.y); 
        rotate(this.body.angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop(); 
    }
} 