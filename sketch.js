
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = maater.Constraint;

var craddle1,craddle2,craddle3;
var bob1,bob2,bob3;
var log1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1=createSprite(130,200,190,10);
	
	craddle1=createSprite(100,250,20,100)
    bob1==createSprite(100,290,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



