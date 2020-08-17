var fixedRect, movingRect, horizontalDistance, verticalDistance; 
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50); 
  fixedRect.shapeColor="green"; 8
  movingRect=createSprite(400, 200, 50, 50); 
  movingRect.shapeColor="green"; 
  horizontalDistance=movingRect.width/2+fixedRect.width/2;
  verticalDistance=movingRect.height/2+fixedRect.height/2;  
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX; 
  movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x<= horizontalDistance
    && fixedRect.x-movingRect.x<=horizontalDistance
     && movingRect.y-fixedRect.y<= verticalDistance 
     && fixedRect.y-movingRect.y<= verticalDistance){
       movingRect.shapeColor="blue"; 
       fixedRect.shapeColor="blue"; 
  }else{
    movingRect.shapeColor="green"; 
    fixedRect.shapeColor="green"; 
  }
  drawSprites();
}