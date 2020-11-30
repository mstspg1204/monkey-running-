
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup ; 
var ground ;
var score; 

function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground = createSprite(10,200,800,20);
   ground.velocityX = -2; 
  
  monkey= createSprite(200,160,20,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  var score = 0 ; 
  

  
}


function draw() {
  background("white")
    if(ground.x < 200 ){
            ground.x = ground.x/2;
  }
  
  if (keyDown("space") && monkey.y <=200){
    monkey.velocityY = -12 ;
  }
       
monkey.velocityY  =   monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(monkey.y <50){
    monkey.velocityY = 0.9;
  }
  food();
  obstacle3();
  text1();

drawSprites(); 
  
}


function food (){
  if (frameCount %60 === 0){
    banana = createSprite(400,200,50,30);
    banana.y = Math.round(random(50,115));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3 ;
    banana.lifetime = 400;
    
    bananaGroup.add(banana);
    
  }
}

function obstacle3 (){
  if(frameCount % 300 === 0 ){
    obstacle = createSprite(200,300,400,500);
      obstacle.y = Math.round(random(50,115));
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
  obstacle .velocityX = -3 ;
    obstacle.lifetime = 400;
        obstacleGroup.add(obstacle);

    
  }
}

function text1 (){
stroke("white");
  textSize(20);
  fill("black");
    stroke("white");
    text("score:"+ score,500,50);
    stroke("black");
  textSize(20);
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+ score,100,50);
}



