var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  spacecraft = createSprite(displayWidth-715, displayHeight-90);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(displayWidth-750, displayHeight-290);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);
    // spacecraft.x = spacecraft.x + Random(-1,1);
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

   /*if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
      textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }*/

  // if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);
  // }

   //if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     //hasDocked = true;
     //textSize(25);
     //fill("white")
     //text("Docking UnSuccessful!", 200, 300);
   //}

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("turquoise");
     text("Docking Successful!", displayWidth-900, displayHeight-500);
     textSize(25)
     fill("yellow");
     text("ThankYou for helping us in docking!!!!!!!!!!!!!!!!!!", displayWidth-1000, displayHeight-150);
   }
     textSize(25);
     fill("red");
     text("Use arrow keys to move the spaceCraft", displayWidth-1000, displayHeight-600);
  drawSprites();
}

