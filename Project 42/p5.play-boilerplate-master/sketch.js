let Iss;
let spacecraft;
var hasDocked = false;
var issImage;
var spaceCraft1Image, spacecraft2Image, spaceCraft3Image, spacecraft4Image;
var spaceBack;

function preload(){
 issImage = loadImage('images/iss.png');

 spaceCraft1Image = loadImage('images/spacecraft1.png')
 spaceCraft2Image = loadImage('images/spacecraft2.png')
 spaceCraft3Image = loadImage('images/spacecraft3.png')
 spaceCraft4Image = loadImage('images/spacecraft4.png')

 spaceBack = loadImage('images/spacebg.jpg')
}


function setup() {
  createCanvas(800,400);

  Iss = createSprite(400,100,50,50);
  Iss.addImage("space", issImage);
  Iss.scale = 0.6;

  spacecraft = createSprite(100, 300, 50, 50);
  spacecraft.addImage(spaceCraft1Image);
  spacecraft.scale = 0.3;
  
}

function draw() {
  background(spaceBack); 

  spacecraft.addImage(spaceCraft1Image);

  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spaceCraft3Image);
      spacecraft.x = spacecraft.x - 1; 
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spaceCraft4Image);
      spacecraft.x = spacecraft.x + 1; 
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spaceCraft2Image);
      spacecraft.y = spacecraft.y + 1; 
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 1; 
    }
  }

  if(spacecraft.y <= (Iss.y + 70) && spacecraft.x <= (Iss.x - 10)){
    hasDocked = true;

    textSize(25);
    fill('purple');
    text('Has Docked is Complete', 400, 300);
  }


  drawSprites();
}