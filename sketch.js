var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rightWall, leftWall, baseWall, baseBody, leftBody, rightBody;
var helicopterSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	// helicopterSound = loadSound("helicopter-hovering-01")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(0, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX = 2
	packageSprite.visible = false

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 2
	
	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	baseWall = createSprite(width/2, height-35, 200, 20);
	baseWall.shapeColor = "red";
	baseBody = Bodies.rectangle(width/2, height-50, 200, 20, {isStatic:true});
	World.add(world, baseBody);

	rightWall = createSprite(width/2+100, height-75, 20, 100);
	rightWall.shapeColor = "red";
	rightBody = Bodies.rectangle(width/2+100, height-90, 20, 100, {isStatic:true});
	World.add(world, rightBody);

	leftWall = createSprite(width/2-100, height-75, 20, 100);
	leftWall.shapeColor = "red";
	leftBody = Bodies.rectangle(width/2-100, height-90, 20, 100, {isStatic:true});
	World.add(world, leftBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(helicopterSprite.x === width/2){
	  helicopterSprite.velocityX = 0
	  helicopterSprite.velocityX = 0
	  packageSprite.visible = true;
  }
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
	} 
	else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
   		Matter.Body.setStatic(packageBody,false);
  	}
}



