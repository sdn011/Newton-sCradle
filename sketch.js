
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var constrainedBall1, constrainedBall2, constrainedBall3, constrainedBall4,
constrainedBall5
var roof


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	constrainedBall1 = new firstBall(200, 400, 100, 100)
	constrainedBall2 = new Ball(300, 400, 100, 100)
	constrainedBall3 = new Ball(400, 400, 100, 100)
	constrainedBall4 = new Ball(500, 400, 100, 100)
	constrainedBall5 = new Ball(600, 400, 100, 100)

	roof = new Roof(400, 400, 600, 100)

	var options1 = {
        bodyA: roof.body, 
        bodyB: constrainedBall1.body,
        stiffness: 0.04,
        length: 10
	}
	
	var options2 = {
        bodyA: roof.body, 
        bodyB: constrainedBall2.body,
        stiffness: 0.04,
        length: 10
	}
	
	var options3 = {
        bodyA: roof.body, 
        bodyB: constrainedBall3.body,
        stiffness: 0.04,
        length: 10
	}
	
	var options4 = {
        bodyA: roof.body, 
        bodyB: constrainedBall4.body,
        stiffness: 0.04,
        length: 10
	}
	
	var options5 = {
        bodyA: roof.body, 
        bodyB: constrainedBall5.body,
        stiffness: 0.04,
        length: 10
    }
	Engine.run(engine);
}
	var rope1 = Constraint.create(options1)
    World.add(world, rope1)

    var rope2 = Constraint.create(options2)
	World.add(world, rope2)

	var rope3 = Constraint.create(options3)
    World.add(world, rope3)

    var rope4 = Constraint.create(options4)
	World.add(world, rope4)

	var rope5 = Constraint.create(options5)
    World.add(world, rope5)

function draw() {
  rectMode(CENTER);
  background(0);

  constrainedBall1.display();
  constrainedBall2.display();
  constrainedBall3.display();
  constrainedBall4.display();
  constrainedBall5.display();

  roof.display();
  
  drawSprites();

  strokeWeight(3)
    line(roof.body.position.x, roof.body.position.y, constrainedBall1.body.position.x, constrainedBall1.body.position.y)
	line(roof.body.position.x, roof.body.position.y, constrainedBall2.body.position.x, constrainedBall2.body.position.y)
	line(roof.body.position.x, roof.body.position.y, constrainedBall3.body.position.x, constrainedBall3.body.position.y)
	line(roof.body.position.x, roof.body.position.y, constrainedBall4.body.position.x, constrainedBall4.body.position.y)
	line(roof.body.position.x, roof.body.position.y, constrainedBall5.body.position.x, constrainedBall5.body.position.y)
 
}



