
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var yes;
var posx;
var posy
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    
	

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
    
    
   


	engine = Engine.create();
	world = engine.world;
    
    ground = new Ground (width/2,670,width,20)
	leftSide = new Ground (1100,600,20,120)
	rightSide = new Ground (1400,600,20,120)

	ball = Bodies.circle(150, 100,15, ball_options)
	World.add(world,ball)

	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  posx = ball.X
  posy = ball.Y
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipseMode(CENTER);	
  ellipse(posx, posy, 15, 15);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(Bodies.circle, {x:20 , y:-10})	
	}
}

