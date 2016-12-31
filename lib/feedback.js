function Feedback(canvas, ctx, lander){
  this.canvas = canvas
  this.ctx = ctx
  this.lander = lander
}

Feedback.prototype.displayData = function(){
  this.displayFuel()
  this.landerStatus()
}

Feedback.prototype.displayFuel = function(){
  this.ctx.font = '20px Arial'
  if (this.lander.fuelAmount > 0) {
    this.ctx.strokeText('Fuel Remaining: ' + parseInt(this.lander.fuelAmount), 30, 30)
  } else {
    this.ctx.strokeText('Fuel Remaining: 0', 30, 30)
  }
}

Feedback.prototype.landerStatus = function(){
  this.ctx.font = '20px Arial'
  this.ctx.strokeText('Lander Status: ' + this.lander.status, 30, 60)
}

module.exports = Feedback
