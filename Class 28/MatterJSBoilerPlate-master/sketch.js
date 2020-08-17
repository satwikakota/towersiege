
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyIMG; 
var boy; 
function preload()
{
	boyIMG= loadImage("sprites\sprites/boy.png"); 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	boy.createSprite(200,200,10,10);
	stone1= new Stone(200,150,5); 
	mango1= new Mango(300,300,10); 
	mango2= new Mango(400,300,10);
	mango3= new Mango(350,400,10);
	mango4= new Mango(400,400,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display(); 
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  drawSprites();
 
}



