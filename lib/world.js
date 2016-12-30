function World(canvas, ctx, userControls, lander, maps, collisions) {
  this.canvas = canvas
  this.ctx = ctx
  this.userControls = userControls
  this.lander = lander
  this.maps = maps
  this.collisions = collisions
}

World.prototype.runAnimationLoop = function(){
  requestAnimationFrame(function gameloop(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.maps.draw()
    this.lander.move(this.userControls.activeControls)
    this.lander.draw()
    this.collisions.testForCollisions()

    requestAnimationFrame(gameloop.bind(this))
  }.bind(this))
}

module.exports = World
