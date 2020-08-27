const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint; 
var engine,world; 
function setup() {
  var canvas=createCanvas(1200,600);
  engineobject=Engine.create(); 
  worldp= engineobject.world; 
  groundbase1= new Ground(480,500,400,20); 
  groundbase2= new Ground(950,250,400,20);
  box1=new Box(380,470,30,40);
  box2=new Box(410,470,30,40);
  box3=new Box(440,470,30,40);
  box4=new Box(470,470,30,40);
  box5=new Box(500,470,30,40);
  box6=new Box(530,470,30,40);
  box7=new Box(560,470,30,40);
  box1top=new Box(410,430,30,40); 
  box2top=new Box(440,430,30,40); 
  box3top=new Box(470,430,30,40); 
  box4top=new Box(500,430,30,40); 
  box5top=new Box(530,430,30,40); 
  box1top1=new Box(440,390,30,40); 
  box2top1=new Box(470,390,30,40); 
  box3top1=new Box(500,390,30,40);
  box1top2=new Box(470,350,30,40); 
  box1new=new Box(900,220,30,40);
  box2new=new Box(930,220,30,40);
  box3new=new Box(960,220,30,40);
  box4new=new Box(990,220,30,40);
  box5new=new Box(1020,220,30,40);
  box1newtop=new Box(930,180,30,40);
  box2newtop=new Box(990,180,30,40);
  box3newtop=new Box(960,180,30,40);
  box1newtop1=new Box(960,140,30,40);
  polygon1=new Polygon(200,400,40,40);
  slingpoly=new Slingshot(polygon1.body,{x:200, y:400});
}

function draw() {
  Engine.update(engineobject);
  background(255); 
  groundbase1.display(); 
  groundbase2.display(); 
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display();  
  box1top.display(); 
  box2top.display(); 
  box3top.display(); 
  box4top.display(); 
  box5top.display();
  box1top1.display(); 
  box2top1.display(); 
  box3top1.display();
  box1top2.display(); 
  box1new.display(); 
  box2new.display(); 
  box3new.display(); 
  box4new.display(); 
  box5new.display(); 
  box1newtop.display();
  box2newtop.display(); 
  box3newtop.display(); 
  box1newtop1.display();
  polygon1.display();
  slingpoly.display();   
}
function mouseReleased(){
  slingpoly.fly();
}
function mouseDragged(){
  Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}