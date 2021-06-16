var issImg,bgImg;
var spacecraft1Img;
var spacecraftupImg;
var spacecraftrightImg;
var spacecraftleftImg;

function preload(){
  issImg = loadImage("images/iss.png");
  spacecraft1Img = loadImage("images/spacecraft1.png");
  spacecraftupImg = loadImage("images/spacecraft2.png");
  spacecraftrightImg = loadImage("images/spacecraft4.png");
  spacecraftleftImg = loadImage("images/spacecraft3.png");


  backImg = loadImage("images/backImage.png");

}

function setup() {
  createCanvas(800,750); 

  iss = createSprite(330,130);
  iss.addImage(issImg);
 // iss.scale =0.25;


  spacecraft1 = createSprite(285,240);
  spacecraft1.addImage(spacecraft1Img);
  spacecraft1.scale =0.15;

}
  

function draw() {
  background(backImg); 

if(keyDown(UP_ARROW)){
 spacecraft1.addImage(spacecraftupImg);
 spacecraft1.y=spacecraft1.y-2;
}
if(keyDown(RIGHT_ARROW)){
  spacecraft1.addImage(spacecraftrightImg);
  spacecraft1.x=spacecraft1.x+2;
 }

 if(keyDown(LEFT_ARROW)){
  spacecraft1.addImage(spacecraftleftImg);
  spacecraft1.x=spacecraft1.x-2;
 }






  drawSprites();
}