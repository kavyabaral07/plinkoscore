const Engine = Matter.engine;
const World = Matter.world;
const Bodies = Matter.bodies;

var ball1,ball2,ball3;
var p1,p2,p3,p4,p5,p6;
var ground;
var d1,d2,d3
var r;

var Particles = [];
var Plinkos = [];
var divisions = [];

var divisionheight = 300;

function setup() {
  createCanvas(480,800);
    for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); }
   /* d1 = new Division();*/
}

function draw() {
  background(0,0,0);
  for (var r = 0; r <=width; r = r + 80) {
   d1[r].display();
  }
  drawSprites();
}