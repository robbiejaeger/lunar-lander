function Lander(x, y, width, height, ctx) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.ctx = ctx
}

Lander.prototype.draw = function(){
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

Lander.prototype.move = function(activeControls){
  this.moveFromGravity()
  this.moveFromPropulsion(activeControls)
}

Lander.prototype.moveFromGravity = function(){
  this.y++
}

Lander.prototype.moveFromPropulsion = function(activeControls){
  console.log(activeControls.launch)
  if (activeControls.launch) this.y-=2
}

module.exports = Lander
