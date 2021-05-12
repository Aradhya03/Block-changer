var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    boywalkningimg=loadAnimation("boy1.png", "boy2.png")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(10,450,30,300);
    block1.shapeColor = "blue";

    block2 = createSprite(790,450,30,300);
    block2.shapeColor = "orange";

    block3 = createSprite(10,150,30, 300);
    block3.shapeColor = "red";

    block4 = createSprite(790,150,30,300);
    block4.shapeColor = "purple";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(500,500, 30,30);
    ball.shapeColor = rgb(255,255,255);
    ball.visible=false;

    boy=createSprite(500, 500, 30, 30);
    boy.addAnimation("boywalking", boywalkningimg);
    boy.scale=0.4;


}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
  

    

    if(keyDown("left")&& ball.visible===false){
        boy.x=boy.x-4;
        ball.x=ball.x-4;
    }
    
    if(keyDown("right")&& ball.visible===false){
        boy.x=boy.x+4;
        ball.x=ball.x+4;
    }

    if(keyDown("space") && ball.visible===false){
        ball.visible=true;
        ball.velocityX=6;
        ball.velocityY=6;
    }


    if(frameCount%400===0){
        ball.visible=false;
    }


    //write code to bounce off ball from the block1 

    if(ball.isTouching(block1)){
     ball.shapeColor="blue";
    }
    
    if(ball.isTouching(block3)){
        ball.shapeColor="red";
       }

    if(ball.isTouching(block2)){
        ball.shapeColor="orange";
       }   
       
       if(ball.isTouching(block4)){
        ball.shapeColor="purple";
       }
    drawSprites();
}
