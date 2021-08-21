var snowflake,snowflakeImg
var snowflake1, snowfalke1Img
var bgImg


function preload() {
  snowflakeImg = loadImage("snow5.webp");
  snowflake1Img = loadImage("snow4.webp");
  bgImg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);

 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
  createSnowflake1();
}

function createSnowflake(){
  if(frameCount%50===0){
  snowflake = createSprite(random(0,800), 0, 40, 60);
  snowflake.velocityX = -1;
  snowflake.velocityY = 2;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}

function createSnowflake1(){
  if(frameCount%50===0){
  snowflake1 = createSprite(random(0,800), 0, 30, 60);
  snowflake1.velocityX = -2;
  snowflake1.velocityY = 1;
  snowflake1.addImage(snowflake1Img);
  snowflake1.scale = 0.1;
  }
}