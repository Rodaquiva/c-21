const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball;
let engine;
let world;

var arriba, abajo, derecha, izquierda;
var boton1;
var boton2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  abajo = new Ground(200,390,400,20);
  derecha = new Ground(390,200, 20, 400);
  izquierda = new Ground(10, 200,20,400);
  arriba = new Ground(200,10,400,20);

  var ballOptions = {
    restitution:0.95 
  }
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  boton1 = createImg("right.png");
  boton2 = createImg("up.png");
  boton1.position(220,30);
  boton2.position(20,30);
  boton1.size(50,50);
  boton2.size(50,50);
  boton1.mouseClicked(fuerzaH);
  boton2.mouseClicked(fuerzaV);
  }

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);

  arriba.show();
  abajo.show();
  derecha.show();
  izquierda.show();
}
function fuerzaH()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function fuerzaV()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05});
}