class Cubes{
  constructor(x, size, mass, vel, xc){
    this.x = x;
    this.y = ground - size;
    this.size = size;
    this.mass = mass;
    this.vel = vel;
    this.xConstraint = xc;
  }
  
  show(){
    fill(50, 0, 230, 100);
    stroke(0);
    var x = constrain(this.x, this.xConstraint, width * 2);
    rect(x, this.y, this.size, this.size);
  }
  
  move(){
    this.x += this.vel;
  }
  
  collide(other){
    return(this.x <= other.x + other.size && (this.x + this.size) >= other.x);
        
  }
  
  ricochet(other){
    if(this.collide(other)){
      clackSound = true;
      collisions += 1;
      let v1 = (((this.mass - other.mass)/ (this.mass + other.mass)) * this.vel) + (((2 * other.mass)/ (this.mass + other.mass)) * other.vel);
      let v2 = (((other.mass - this.mass)/ (other.mass + this.mass)) * other.vel) + (((2 * this.mass)/ (this.mass + other.mass)) * this.vel);
      this.vel = v1;
      other.vel = v2;
    }
  }
  
  hitWall(){
    if (this.x <= wall){
      clackSound = true;
      collisions += 1;
      this.vel *= -1;
    }
  }
}
