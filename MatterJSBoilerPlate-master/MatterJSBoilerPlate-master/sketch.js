
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var dustbinobject,paperobject,groundobject
var world

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinobject=new dustbin(1200,650)
	paperobject=new Paper(200,450,40)
	groundobject=new Ground(width/2,670,width,20)
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinobject.display()
  paperobject.display()
  groundobject.display()
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85})
}
}


