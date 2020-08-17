var car, wall; 
function setup() {
  createCanvas(800,400);
  car= createSprite(50, 200, 50, 50);
  speed=random(55,90); 
  weight=random(400,1500); 
  wall=createSprite(400,200,60,height/2); 
  wall.shapeColor="green"; 
  car.velocityX=speed;
}

function draw() {
  background(0);  
  console.log(car.velocityX); 
  if(wall.x-car.x < (car.width)/2+(wall.width)/2){
    car.velocityX=0; 
    var deformation=0.5 * weight * speed * speed/ 22500
    if(deformation>180){
      car.shapeColor="yellow"
    }
    else if(deformation<100){
      car.shapeColor="blue"
    }
    else if(deformation>=100 && deformation<=180){
      car.shapeColor="pink" 
    }
    collide(car,wall); 
  }
  drawSprites();
}
function collide(object1,object2){
  var horizontal= object1.width/2+object2.width/2; 
  var vertical= object1.height/2+ object2.height/2; 
  if(object1.x-object2.x == horizontal && object2.x-object1.x == horizontal){
    object1.velocityX=0; 
    object2.velocityX=0; 
  }
  if(object1.y-object2.y == vertical && object1.y- object2.y == vertical){
    object1.velocityY=0;
    object2.velocityY=0; 
  }
}
