class Swarm{
  constructor(swarm){
    this.swarm = swarm;
    this.color = this.swarm.col;

    
    this.name = this.swarm.name;
    this.group = this.swarm.members;
    this.particles = [];
  }

  createGroupOfParticles(){

     for(var i = 0; i < this.group.length; i++){

        var particle = new Particle(this.group[i].name, this.color);
        this.particles.push(particle);
     }

 } 

}


