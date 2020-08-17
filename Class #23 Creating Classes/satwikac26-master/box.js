class Box {

    //constructor() :inbuilt function
    //constructor consists of properties
    constructor(x, y, w, h) {
        var option = {
            restitution: 0.2
        }
        this.body = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(engineWorld, this.body);
    }

    display() {
        push(); 
        translate(this.body.position.x,this.body.position.y); 
        rotate(this.body.angle);
        fill("white");
        stroke("green");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop(); 
    }






}