function Lander(x, y, ctx) {
  this.x = x
  this.y = y
  this.width = 30
  this.height = 30
  this.ctx = ctx
  this.dx = 0
  this.dy = 0
  this.gravitationalConstant = 0.005
  this.propulsionConstant = 0.01
  this.status = "Flying"
  this.fuelAmount = 500
  this.rotationAmount = 0
  this.img = this.getLanderImage()
}

Lander.prototype.getLanderImage = function(){
  var image = new Image()
  image.src = 'img/lander-white.png'
  return image
}

Lander.prototype.draw = function(){
  this.ctx.save()
  this.ctx.translate(this.x, this.y)
  this.ctx.rotate(this.rotationAmount * (Math.PI / 180))
  this.ctx.translate(-this.x, -this.y)
  this.ctx.drawImage(this.img, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
  this.ctx.restore()
}

Lander.prototype.move = function(activeControls){
  if (this.status === "Flying") {
    this.moveFromGravity()
    this.rotate(activeControls)
    this.moveFromPropulsion(activeControls)
    this.moveFromVelocity()
  } else if (this.status === "Fuel Depleted") {
    this.moveFromGravity()
    this.moveFromVelocity()
  }
}

Lander.prototype.moveFromGravity = function(){
  this.dy += this.gravitationalConstant
}

Lander.prototype.moveFromPropulsion = function(activeControls){
  if (activeControls.launch) {
    this.dy -= this.propulsionConstant * Math.cos(this.rotationAmount * (Math.PI / 180))
    this.dx += this.propulsionConstant * Math.sin(this.rotationAmount * (Math.PI / 180))
    this.depleteFuel()
  }
}

Lander.prototype.moveFromVelocity = function(){
  this.y += this.dy
  this.x += this.dx
}

Lander.prototype.rotate = function(activeControls){
  if (activeControls.rotateClockwise) {
    this.rotationAmount -= 2
    this.fuelAmount -= 0.2
  } else if (activeControls.rotateCounterClockwise) {
    this.rotationAmount += 2
    this.fuelAmount -= 0.2
  }
}

Lander.prototype.depleteFuel = function(){
  this.fuelAmount -= 0.5
  if (this.fuelAmount <= 0) this.status = "Fuel Depleted"
}

module.exports = Lander
