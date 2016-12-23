function Lander(x, y, width, height, ctx) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.ctx = ctx
  this.dx = 0
  this.dy = 0
}

Lander.prototype.draw = function(){
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

Lander.prototype.move = function(activeControls){
  this.moveFromGravity()
  this.moveFromPropulsion(activeControls)
}

Lander.prototype.moveFromGravity = function(){
  this.dy += 0.01
  this.y += this.dy
}

Lander.prototype.moveFromPropulsion = function(activeControls){
  if (activeControls.launch) this.dy -= 0.03
  this.y += this.dy
}

module.exports = Lander
