function Feedback(canvas, ctx, lander){
  this.canvas = canvas
  this.ctx = ctx
  this.lander = lander
}

Feedback.prototype.displayData = function(){
  this.ctx.font = '20px Arial'
  this.displayFuel()
  this.landerStatus()
  this.landerSpeeds()
}

Feedback.prototype.displayFuel = function(){
  if (this.lander.fuelAmount > 0) {
    this.ctx.strokeText('Fuel Remaining: ' + parseInt(this.lander.fuelAmount), 30, 30)
  } else {
    this.ctx.strokeText('Fuel Remaining: 0', 30, 30)
  }
}

Feedback.prototype.landerStatus = function(){
  this.ctx.strokeText('Lander Status: ' + this.lander.status, 30, 60)
}

Feedback.prototype.landerSpeeds = function(){
  this.ctx.strokeText('Vertical Speed: ' + parseFloat(Math.round(this.lander.dy * 100)/10), 30, 90)
  this.ctx.strokeText('Horizontal Speed: ' + parseFloat(Math.round(this.lander.dx * 100)/10), 30, 120)
}

module.exports = Feedback
