function Collisions(canvas, lander){
  this.canvas = canvas
  this.lander = lander
}

Collisions.prototype.testForCollisions = function(){
  this.testLanding()
}

Collisions.prototype.testLanding = function(){
  if (this.lander.y + this.lander.height/2 > this.canvas.height) {
    this.lander.landed = true
    this.lander.dy = 0
    this.lander.dx = 0
    console.log("You landed.")
  }
}

module.exports = Collisions
