function Maps(canvas, ctx){
  this.canvas = canvas
  this.ctx = ctx
  this.blueprints = [{
    xPoints: [0, 50, 90, 100, 110, 120, 150, 300, 450, 500, 600, 700, 800, 850, 900, this.canvas.width],
    yPoints: [0, 25, 25, 35, 40, 35, 20, 60, 40, 40, 75, 150, 250, 250, 300, 550],
    landingPads: [[450, 42, 490, 42], [800, 252, 850, 252]] // x1, y1, x2, y2
  }]
}

Maps.prototype.drawTerrain = function(){
  this.ctx.beginPath()

  this.blueprints[0].xPoints.forEach(function(point, i){
    this.ctx.lineTo(point, this.canvas.height - this.blueprints[0].yPoints[i])
  }.bind(this))

  this.ctx.strokeStyle = '#FFF';
  this.ctx.stroke()
}

Maps.prototype.showPads = function(){
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
