//3 constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var object;
var engineWorld;
var ground;
var ball;
var boxOne, boxTwo;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    //console.log(engine);
    engineWorld = engine.world;
    World.add(engineWorld, object);
    //console.log(ground);
    //new signifies there is an object to be create
    boxOne = new Box(200, 20, 70, 70);
    console.log(boxTwo);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    boxOne.display();
}