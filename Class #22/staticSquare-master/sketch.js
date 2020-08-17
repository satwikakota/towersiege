const Engine = Matter.Engine; 
const World= Matter. World; 
const Bodies= Matter.Bodies; 

var engineobject, worldp; 

function setup(){
    createCanvas(400,400); 
    engineobject=Engine.create(); 
    worldp= engineobject.world; 
    var groundoptions={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,40,40,groundoptions);
    World.add(worldp,ground); 

    var balloptions={
        restitution:1.0
    }
    ball=Bodies.circle(200,100,10, balloptions); 
    World.add(worldp,ball); 
}

function draw(){
    background(220); 
    //Engine.update(engineobject); 
    rectMode(CENTER); 
    rect(ground.position.x, ground.position.y,400,50); 
    ellipseMode(RADIUS); 
    ellipse(ball.position.x, ball.position.y,20,20); 
}