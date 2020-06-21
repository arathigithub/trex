var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cg,ci;
var og,o1,o2,o3,o4,o5,o6;

var score=0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  ci=loadImage("cloud.png");
  o1=loadImage("obstacle1.png");
  o2=loadImage("obstacle2.png");
  o3=loadImage("obstacle3.png");
  o4=loadImage("obstacle4.png");
  o5=loadImage("obstacle5.png");
  o6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  og=new Group();
  cg=new Group();
}

function draw() {
  background(180);
  
  score=score+Math.round(getFrameRate()/60);
  text("score"+score,500,50);
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  sc();
  so();
  drawSprites();
}
function sc(){
  if(frameCount%60===0){
    var c=createSprite(600,120,40,10);
    c.y=Math.round(random(80,120));
    c.addImage(ci);
    c.scale=0.5;
    c.velocityX=-6;
  }
}
function so(){
  if(frameCount%60===0){
    var o=createSprite(600,165,10,40);
    o.velocityX=-6;
    o.scale=0.5;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: o.addImage(o1);
              break;
      case 2: o.addImage(o2);
              break;     
      case 3: o.addImage(o3);
              break;
      case 4: o.addImage(o4);
              break;
      case 5: o.addImage(o5);
              break;
      case 6: o.addImage(o6);
              break;
    }
    o.lifetime=300;
    og.add(o);
    }
  
}