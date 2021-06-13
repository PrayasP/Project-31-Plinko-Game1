
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,791,480,15,"white");

  for(var k = 0; k<=width; k = k+80 ) {
    divisions.push(new Division(k,height - divisionHeight/2,15,divisionHeight))
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75,20));
  }

  for(var j = 15; j<=width; j = j+50){
    plinkos.push(new Plinko(j,175,20));
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,275,20));
  }

  for(var j = 15; j<=width; j = j+50){
    plinkos.push(new Plinko(j,375,20));
  }

  // if(frameCount%30===0){
  //   particles.push(new Particle(random(width/2-10,width/2+10),10, 10));
  // }

  
  Engine.run(engine);
}

function draw() {
  background(0);

  //Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(230,250),-10, 10))
  }

  for(var i = 0; i < divisions.length; i++ ) {
    divisions[i].display()
  }

  for(var i = 0; i < plinkos.length; i++ ) {
    plinkos[i].display()
  }
  for(var i = 0; i < plinkos.length; i++ ) {
    plinkos[i].display()
  }
  for(var i = 0; i < plinkos.length; i++ ) {
    plinkos[i].display()
  }
  for(var i = 0; i < plinkos.length; i++ ) {
    plinkos[i].display()
  }

  for(var ar = 0; ar < particles.length; ar++){
    particles[ar].display()
  }

  ground1.display();

  drawSprites();
}