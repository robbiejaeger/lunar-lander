function World(canvas, ctx, userControls, lander, collisions) {
  this.canvas = canvas
  this.ctx = ctx
  this.userControls = userControls
  this.lander = lander
  this.collisions = collisions
}

World.prototype.runAnimationLoop = function(){
  requestAnimationFrame(function gameloop(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.lander.move(this.userControls.activeControls)
    this.lander.draw()
    this.collisions.testForCollisions()

    requestAnimationFrame(gameloop.bind(this))
  }.bind(this))
}

module.exports = World
