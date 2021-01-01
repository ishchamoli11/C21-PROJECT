var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);
  bullet=shapeColor(white);
  bullet.velocityX=speed;
  

  wall=createSprite(1200,200,thickness,height/2);
  wall=shapeColor(80,80,80);
}

function draw() {
  background(0,0,0); 

  
hasCollide();

  drawSprites();
}
function hasCollide(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  
  }
  return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
if(damage>10)
{
  wall.shapeColor=green(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=red(0,255,0);
}
}

