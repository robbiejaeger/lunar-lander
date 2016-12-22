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

Lander.prototype.moveRight = function(){
  this.x++
}

module.exports = Lander
