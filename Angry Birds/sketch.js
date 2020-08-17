//3 constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body; 
const Constraint= Matter.Constraint; 
var engine;
var object;
var engineWorld;
var boxOne, boxTwo,groundOne; 

function setup() {
    createCanvas(1200,400);
    engine = Engine.create();
    //console.log(engine);
    engineWorld = engine.world; 
    //console.log(ground);
    //new signifies there is an object to be create
    boxOne = new Box(700, 320, 70, 70);
    boxTwo= new Box(900,320,70,70); 
    ground= new Ground(600,height,1200,50); 
    pig1= new Pig(810,320); 
    log1= new Log(810,380,300,PI*28.5);
    //pig2= new Pig()
    boxThree= new Box(810,260,70,70); 
    
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    boxOne.display();
    boxTwo.display(); 
    ground.display();
    pig1.display();  
    log1.display(); 
    boxThree.display(); 
}