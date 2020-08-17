//3 constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var object;
var engineWorld;
var boxOne, boxTwo,groundOne; 

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    //console.log(engine);
    engineWorld = engine.world; 
    //console.log(ground);
    //new signifies there is an object to be create
    boxOne = new Box(200, 20, 70, 70);
    boxTwo= new Box(230,50,70,70); 
    ground= new Ground(200,380,400,50); 
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    boxOne.display();
    boxTwo.display(); 
    ground.display(); 
}