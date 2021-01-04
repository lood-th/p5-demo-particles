class Particle{
  constructor(name, color){
    this.color = color;
    this.name = name;
    this.diameter = 10;
    this.xPosition = random(width);
    this.yPosition = random(height);
  }

display(){     
  fill(this.color);
  strokeWeight(0);
  ellipse(this.xPosition, this.yPosition, this.diameter);
};

move(){ 
  this.xPosition = this.xPosition + random(-0.5, 0.5);
  this.yPosition = this.yPosition + random(-0.5, 0.5);
};

} 
