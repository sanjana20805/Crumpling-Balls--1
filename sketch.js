
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var paper;




function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	rect1 = Bodies.rectangle(200,20,200,20)
	World.add(world,rect1)

	rect2 = Bodies.rectangle(200,20,20,200,{isStatic:true})
	World.add(world,rect2)

	rect3 = Bodies.rectangle(200,20,20,200,{isStatic:true})
	World.add(world,rect3)

	
	var options = {
	
		isStatic:false,
		restitution:0.3,
		

	}

	paper = new Paper(40,40,40,40)
	ground = new Ground(600,height,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 
  fill("white")
  rect(1400,650,300,20)
 
  fill("white")
  rect(1255,590,20,100)
 
 
  fill("white")
  rect(1550,590,20,100)

  paper.display();
  ground.display();

 


  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:105})
	   
	 }
   }


