
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1=new hammer(50,50,50,10);
	ground1 = new ground(800,700,1600,20)
	rubberball1 = new rubberball(300,300,20);
	sand1=new sand(140,20,2);
	sand2=new sand(150,20,2);
	sand3=new sand(160,20,2);
	sand4=new sand(170,20,2);
	sand5=new sand(180,20,2);
	sand6=new sand(190,20,2);
	iron1=new iron(200,200,100,20);
	stone1=new stone(100,100,40,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer1.display();
  ground1.display();
  rubberball1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();
  stone1.display();
  drawSprites();
 
}



