var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopter=createSprite(400, 50, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(400, height-20, width,50);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 50 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, width, 50 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=400-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
 console.log(400);
  Movement();

  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  if(packageSprite.y > 700 && packageBody.position.y > 700 ){
	Matter.Body.setStatic(packageBody,true);
  }


  
  drawSprites();
  
  
 
}

function Movement() 
{
	if (keyCode === RIGHT_ARROW && helicopter.x<=700 ) {
		helicopter.x = helicopter.x + 3;

		if(packageBody.position.y < 200)
		{
			Matter.Body.translate(packageBody,{x:3 , y:0}) 
		}
	}

	if (keyCode === LEFT_ARROW && helicopter.x>=100 ) {
		helicopter.x = helicopter.x -3;

		if(packageBody.position.y < 200)
		{
			Matter.Body.translate(packageBody,{x:-3 , y:0}) 
		}
	}
	
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false); 
	}
}
