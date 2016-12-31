function Collisions(canvas, lander, maps){
  this.canvas = canvas
  this.lander = lander
  this.maps = maps
}

Collisions.prototype.testForCollisions = function(){
  this.testLanding()
  this.testGroundImpact()
}

Collisions.prototype.testLanding = function(){
  var landingPads = this.maps.blueprints[0].landingPads

  landingPads.forEach(function(pad){
    if (this.lander.y + this.lander.height/2 >= (this.canvas.height - pad[1]) && this.lander.x >= pad[0] && this.lander.x <= pad[2]) {
      if (this.lander.dy > 0.2) {
        this.lander.status = "Crashed"
      } else {
        this.lander.status = "Landed"
      }
    }
  }.bind(this))
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
    this.lander.status = "Crashed"
  }
}

module.exports = Collisions
