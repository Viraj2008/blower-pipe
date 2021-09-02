const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;




function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world;
ball=new Ball(width/2+80,height/2-80,80,80)
blower=new Blower(width/2-50,height/2+50,150,20)
blowermouth=new Blowermouth(width/2+70,height/2+70,100,100)
button=createButton("click to blow")
button.position(width/2,height-40)
button.class("blowButton")


button.mousePressed(blow)

  //createSprite(400, 200, 50, 50);









  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  



  ball.display();
  blower.display();
  blowermouth.display();
 // drawSprites();
}
function blow()
{
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}

