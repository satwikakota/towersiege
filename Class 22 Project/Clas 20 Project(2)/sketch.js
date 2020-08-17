var bullet, wall; 
var speed,weight,thickness; 
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 5, 10);
  bullet.shapeColor="white"; 
  speed=random(223,321); 
  weight=random(30,52); 
  thickness=random(22,83); 
  wall=createSprite(1200,200,thickness,height/2); 
  wall.shapeColor=(80,80,80);  
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  console.log(bullet.velocityX); 
  if(hascollide(bullet,wall)){
    bullet.velocityX=0; 
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness); 
    if(damage>10){
      wall.shapeColor="green"
    }
    else if(damage<10){
      wall.shapeColor="red"
    }
    collided(bullet,wall); 
  }
  drawSprites();
}
function hascollide(bullet,wall){
    var horizontal=bullet.x + wall.width; 
    var vertical= wall.x; 
    if(horizontal >= vertical){
        return true; 
    }else 
        return false; 
  }
function collided(object1,object2){
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