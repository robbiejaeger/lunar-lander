function Collisions(canvas, lander, maps){
  this.canvas = canvas
  this.lander = lander
  this.maps = maps
}

Collisions.prototype.testForCollisions = function(){
  // this.testLanding()
  this.testGroundImpact()
}

Collisions.prototype.testLanding = function(){
  if (this.lander.y + this.lander.height/2 > this.canvas.height) {
    this.lander.landed = true
    this.lander.dy = 0
    this.lander.dx = 0
    console.log("You landed.")
  }
}

Collisions.prototype.testGroundImpact = function(){
  var xPoints = this.maps.blueprints[0].xPoints
  var yPoints = this.maps.blueprints[0].yPoints

  var rightBound = xPoints.findIndex(function(point){
    return point > this.lander.x
  }.bind(this))

  var mapLineSlope = (yPoints[rightBound] - yPoints[rightBound - 1]) / (xPoints[rightBound] - xPoints[rightBound - 1])
  var yPointToCheck = this.canvas.height - mapLineSlope*(this.lander.x - xPoints[rightBound - 1]) - yPoints[rightBound - 1]
  
  if (this.lander.y + this.lander.height/2 > yPointToCheck) {
    console.log("Crashed!")
    this.lander.landed = true
    this.lander.dy = 0
    this.lander.dx = 0
  }
}

module.exports = Collisions
