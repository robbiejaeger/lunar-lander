function Maps(canvas, ctx){
  this.canvas = canvas
  this.ctx = ctx
  this.blueprints = [{
    xPoints: [0, 50, 100, 110, 120, 150, 300, 450, this.canvas.width],
    yPoints: [0, 25, 35, 40, 35, 20, 60, 40, 0]
  }]
}

Maps.prototype.draw = function(){
  this.ctx.beginPath()
  // this.ctx.moveTo(this.blueprints[0].xPoints[0], this.blueprints[0].yPoints[0])

  this.blueprints[0].xPoints.forEach(function(point, i){
    this.ctx.lineTo(point, this.canvas.height - this.blueprints[0].yPoints[i])
  }.bind(this))

  this.ctx.strokeStyle = '#FFF';
  this.ctx.stroke()
}

module.exports = Maps
