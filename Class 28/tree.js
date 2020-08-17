class Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.image=loadImage("sprites\sprites/tree.png"); 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      image(this.image,0,0,this.width,this.height);
      rect(pos.x, pos.y, this.width, this.height);
      pop(); 
    }
  };