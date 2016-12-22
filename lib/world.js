function World(canvas, ctx, lander) {
  this.canvas = canvas
  this.ctx = ctx
  this.lander = lander
}

World.prototype.runAnimationLoop = function(){
  requestAnimationFrame(function gameloop(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.lander.draw()
    this.lander.moveRight()
    
    requestAnimationFrame(gameloop.bind(this))
  }.bind(this))
}

module.exports = World
