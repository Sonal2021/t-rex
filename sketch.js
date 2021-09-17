
var trex ,trex_running;
var ground, ground2,ground2img
var cloud,cloudimg
var obstacle,obs1,obs2,obs3,obs4,obs5,obs6
var bird,birdimg

function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
ground2img=loadImage("ground2.png")
cloudimg=loadImage("cloud.png")
obs1=loadImage("obstacle1.png")
obs2=loadImage("obstacle2.png")
obs3=loadImage("obstacle3.png")
obs4=loadImage("obstacle4.png")
obs5=loadImage("obstacle5.png")
obs6=loadImage("obstacle6.png")
birdimg=loadImage("bird.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

//create a trex sprite
trex = createSprite(50,160,20,50); 
trex.addAnimation("running", trex_running);
trex.scale=0.5
ground=createSprite(300,200,600,10)
  
ground2=  createSprite(300,180,600,10)
  ground2.addImage("ground",ground2img)
  ground2.x=ground2.width/2
  ground2.velocityX=-3
}

function draw(){
background("white")
if (keyDown("space")&& trex.y>=170){
trex.velocityY=-10
}
console.log(trex.y)
  
  if (ground2.x<300){
    ground2.x=ground2.width/2
  }
    
    
  
trex.velocityY=trex.velocityY+0.5

ground.visible=false
trex.collide(ground)
movecloud();
moveobstacle();
flybird();
drawSprites();

  
}

function movecloud()
{
  if(frameCount % 90 == 0){
  cloud=  createSprite(600,random(50,100),50,10)
  cloud.addImage("cloud",cloudimg)
cloud.scale=0.7
  cloud.velocityX=-3
  }
}

function moveobstacle()
{
  if(frameCount % 70 == 0){
    obstacle=  createSprite(1300,170,50,50)
    obstacle.scale=0.5
    obstacle.velocityX=-3

    var rand= Math.round(random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obs1)
    break;
    case 2: obstacle.addImage(obs2)
    break;
    case 3: obstacle.addImage(obs3)
    break;
    case 4: obstacle.addImage(obs4)
    break;

    case 5: obstacle.addImage(obs5)
    break;

    case 6: obstacle.addImage(obs6)
 default : break;

    }
}


}
function flybird()
{
  if(frameCount % 90 == 0){
    bird=  createSprite(600,random(190,100),50,10)
    bird.addImage("bird",birdimg)
  bird.scale=0.5
   bird.velocityX=-3
    }
  
}
