let businessTeam, 
    swarms = [],
    swarmsToBeMoved = [],
    r = 0,
    target,
    vel,
    icons = [],
    particles = [],
    canvas



function preload(){
  swarmsFromData = loadJSON("json/swarms.json");  
}

function setup() {
  swarms = swarmsFromData.swarms;

  let wrapper = document.getElementById("wrapper");
  let w = wrapper.offsetWidth;
  let h = wrapper.offsetHeight;
  canvas = createCanvas(w, h);
  canvas.parent('wrapper'); 

  swarms.forEach(function(swarm){
    var sw = new Swarm(swarm);
   sw.createGroupOfParticles();
   swarmsToBeMoved.push(sw.particles);
   });
  
  swarmsToBeMoved.forEach(function(swarm){
    swarm.forEach(function(particle){
      particles.push(particle);
    })
  });
}

function draw(){
  background('#0f0a30');
  particles.forEach(function(particle){
    particle.move();
    particle.display(); 
  });

  // noLoop();
}

//  browser-sync start --server -f -w



  
