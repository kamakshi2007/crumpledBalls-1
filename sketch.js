
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;

function preload() {
	
}

function setup() {
	createCanvas(1400,300);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,30);
	ground = new Ground (700,280,1400,10);
	dustbin1 = new Dustbin (1000-5,220,10,90);
	dustbin2 = new Dustbin (1090,265,200,10)
	dustbin3 = new Dustbin (1185,220,10,90);

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-150})

	}

}