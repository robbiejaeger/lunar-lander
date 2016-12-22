function World() {}

World.prototype.runAnimationLoop = function(){
  requestAnimationFrame(function gameloop(){
    console.log("Running")
    requestAnimationFrame(gameloop)
  })
}

module.exports = World
