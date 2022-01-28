
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball_options;
var ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	ground_options={
		isStatic: true
	}

	ball = Bodies.circle(40, 80, 40, ball_options);
	World.add(world, ball);

	ground = new Ground(width/2,670,width,20)
	World.add(world, ground);
	leftSide = new Ground(1100, 600, 20, 120);
	World.add(world, leftSide);
	rightSide = new Ground(900, 600, 20, 120);
	World.add(world, rightSide);

	



	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	ellipse(ball.position.x, ball.position.y, 20)
	rect(width/2,670,width,20);
	rect(1100, 600, 20, 120);
	rect(900, 600, 20, 120);
	

	Engine.update(engine);


	display();
 
}



