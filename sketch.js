const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var engine, world
var pendulum
var box1,box2, box3, box4, box5, box6, box7, box8, box9, box10
var box10, box11, box12, box13, box14, box15

var engine, world;
var ground1;
var ball1
var rope1;



function preload(){

}

function setup(){
    createCanvas(1400, 600);
    engine = Engine.create()
    world=engine.world

    ball1 = new ball(600, 300, 80, 80);
    rope1 = new rope(ball1.body, {x: 600, y:300});


    
    ground1 = new ground(10, 580, 2700, 20);
    box1 = new box(900, 100, 70, 70);
    box2 = new box(900, 100, 70, 70);
    box3 = new box(900, 100, 70, 70);
    box4 = new box(900, 100, 70, 70);
    box5 = new box(900, 100, 70, 70);
    box6 = new box(900, 100, 70, 70);
    box7 = new box(800, 100, 70, 70);
    box8 = new box(800, 100, 70, 70);
    box9 = new box(800, 100, 70, 70);
    box10 = new box(800, 100, 70, 70);
    box11= new box(800, 100, 70, 70);
    box12= new box(800, 100, 70, 70);
    
    
    





}

function draw (){
    background(200);
    Engine.update(engine);

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   ball1.display();
   rope1.display();

}

function mouseDragged(){

    Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });


}









