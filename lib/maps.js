function Maps(canvas, ctx){
  this.canvas = canvas
  this.ctx = ctx
  this.blueprints = [{
    xPoints: [0, 50, 90, 100, 110, 120, 150, 300, 450, this.canvas.width],
    yPoints: [0, 25, 25, 35, 40, 35, 20, 60, 40, 0],
    landingPads: [[50, 27, 90, 27]] // x1, y1, x2, y2
  }]
}

Maps.prototype.draw = function(){
  this.ctx.beginPath()

  this.blueprints[0].xPoints.forEach(function(point, i){
    this.ctx.lineTo(point, this.canvas.height - this.blueprints[0].yPoints[i])
  }.bind(this))

  this.ctx.strokeStyle = '#FFF';
  this.ctx.stroke()
}

Maps.prototype.flashPads = function(){
  this.blueprints[0].landingPads.forEach(function(pad){
    this.ctx.beginPath()
    this.ctx.moveTo(pad[0], this.canvas.height - pad[1])
    this.ctx.lineTo(pad[2], this.canvas.height - pad[3])
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = '#FFF'
    this.ctx.stroke()
  }.bind(this))

  this.ctx.lineWidth = 1
}

module.exports = Maps
