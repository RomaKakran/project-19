
var backgroundImg;
var demon, demonImg;
var climber, climber
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
backgroundimg = loadImage("background.jpg");
demonImg = loadImage("demon.png");

}

function setup() {

    backgroundImg = createSprite(300,300);
    backgroundImg.addImage("background",backgroundImg);
    backgroundImg.velocityX = 1;

    demon = createSprite(200,200,50,50);
    demon.addImage("demon",demonImg);
    demon.scale = 0.5;
}

function draw() {

if(gameState === "play"){

    if(backgroundImg.x > 400){
        backgroundImg.x = 300
   }
  
    if(keyDown("left_arrow")){
      demon.x = demon.x -3;
      }
  
    if(keyDown("right_arrow")){
      demon.x = demon.x +3;
        }
    if(keyDown("space")){
      demon.velocityY = -5;
          }
      demon.velocityY = demon.velocityY +0.8;
    
    if(climbersGroup.isTouching(demon)){
      demon.velocityY = 0;
      }
    if(invisibleBlockGroup.isTouching(demon) || demon.x > 600){
      demon.destroy();
    gameState = "end";
      }
spawnDoors();
drawSprites();

}
if(gameState === "end"){
    textSize(30);
    text("Game Over", 230,250);
    }

}

  function spawnDoors(){
    if(frameCount % 200 === 0){
  climber = createSprite(200,10);
  climber.addImage(climberImg);
  climber.velocityY = 1;
  climber.x = door.x;
  climber.lifetime = 800;
  climbersGroup.add(climber);
  
  demon.depth = door.depth;
  demon.depth +=1;
  
  invisibleBlock = createSprite(200,15);
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlock.velocityY = 1;
  invisibleBlock.x = door.x;
  invisibleBlock.lifetime = 800;
  invisibleBlock.debug = true;
  invisibleBlockGroup.add(invisibleBlock);
   }
}