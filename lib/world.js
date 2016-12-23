function World(canvas, ctx, userControls, lander) {
  this.canvas = canvas
  this.ctx = ctx
  this.userControls = userControls
  this.lander = lander
}

World.prototype.runAnimationLoop = function(){
  requestAnimationFrame(function gameloop(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.lander.draw()
    this.lander.move(this.userControls.activeControls)

    requestAnimationFrame(gameloop.bind(this))
  }.bind(this))
}

module.exports = World
