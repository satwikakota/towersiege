
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(350,height,900,5); 
	paper1= new Paper(100,630,25); 
	dustbin1= new Dustbin(600,650,20,100); 
	dusbin2= new Dustbin(500,700,200,20); 
	dustbin3= new Dustbin(400,650,20,100); 

  
}


function draw() {
	Engine.update(engine); 
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display(); 
  dustbin1.display();
  dusbin2.display();
  dustbin3.display();
  keyPressed(); 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2, y:-2.5})
	}

}


