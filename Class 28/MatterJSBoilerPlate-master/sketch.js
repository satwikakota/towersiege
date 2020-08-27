
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint; 
var boyIMG;  
function preload()
{
	boyIMG= loadImage("sprites/sprites/boy.png"); 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,680,800,15); 
	tree=new Tree(550,450,500,500);
	stone1= new Stone(100,510); 
	mango1= new Mango(500,300); 
	mango2= new Mango(650,350);
	mango3= new Mango(600,300);
	mango4= new Mango(500,400); 
	elastic= new StoneElastic(stone1.body,{x:200,y:60});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine); 
  	rectMode(CENTER); 
	background(0);
	image(boyIMG,50,450,300,300); 
  	tree.display(); 
  	stone1.display(); 
  	mango1.display(); 
  	mango2.display(); 
  	mango3.display(); 
	mango4.display();
	detectCollision(stone1,mango1); 
	detectCollision(stone1,mango2); 
	detectCollision(stone1,mango3); 
	detectCollision(stone1,mango4); 
	drawSprites();  
}
function mouseDragged(){
    Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
    elastic.fly();   
}
function keyPressed(){
    if(keyCode == 32){
		Matter.Body.setPosition(stone1.body,{x:100, y:510})
		elastic.attach(stone1.body); 
    }
}
function detectCollision(stone,mango){
	mangoBodyposition=mango.body.position; 
	stoneBodyposition=stone.body.position; 
	var distance= dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
	if(distance <= stone1.radius +mango.radius){
		Matter.Body.setStatic(mango.body,false); 
	}
}


