const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world 

function preload() {
  backgroundImage=loadImage("sprites/snow1.jpg");
  backgroundImage=loadImage("sprites/snow2.jpg");
  backgroundImage=loadImage("sprites/snow3.jpg");
  backgroundImage=loadImage("sprites/snow4.webp");
  backgroundImage=loadImage("sprites/snow5.webg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world = engine.world;

}

function draw() {
  background(255,255,255);  
  drawSprites();
}