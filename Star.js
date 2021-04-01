function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
}

this.update = function () {
  this.z = this.z - speed;
  if (this.z < 1) {
    this.z = width;
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.pz = this.z;
  }
};
