
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof1, roof2,roof3,roof4,roof5;
var pend1,pend2,pend3,pend4,pend5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1= new Floor(400,200,100,30)
	roof2= new Floor(440,200,200,30)
	roof3= new Floor(480,200,200,30)
	roof4= new Floor(520,200,200,30)
	roof5= new Floor(560,200,100,30)

	pend1= new Pendulum(400,500,20)
	pend2 =new Pendulum(440,500,20)
	pend3 =new Pendulum(480,500,20)
	pend4 =new Pendulum(520,500,20)
	pend5 =new Pendulum(560,500,20)

	chain1 = new Chain(pend1.body,roof1.body,0,0)
	chain2 = new Chain(pend2.body,roof2.body,0,0)
	chain3 = new Chain(pend3.body,roof3.body,0,0)
	chain4 = new Chain(pend4.body,roof4.body,0,0)
	chain5 = new Chain(pend5.body,roof5.body,0,0)

	Engine.run(engine);
  
}


function draw() {
background("white");
  rectMode(CENTER);
  background(0);
  roof1.display();
  chain1.display();
  pend1.display();
 
  chain2.display();
  pend2.display();
  roof2.display();
  
  chain3.display();
  pend3.display();
  roof3.display();

  chain4.display();
  pend4.display();
  roof4.display();

  chain5.display();
  pend5.display();
  roof5.display();

  drawSprites();

}
function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(pend1.body,pend1.body.position,{x:-300,y:-200})
	  }
}



