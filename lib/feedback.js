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
    this.ctx.strokeText('Fuel Remaining: ' + parseInt(this.lander.fuelAmount), 30, 45)
  } else {
    this.ctx.strokeText('Fuel Remaining: 0', 30, 45)
  }
}

Feedback.prototype.landerStatus = function(){
  this.ctx.strokeText('Lander Status: ' + this.lander.status, 30, 75)
}

Feedback.prototype.landerSpeeds = function(){
  if (this.lander.dy > 0.2) {
    this.ctx.strokeStyle = 'red';
    this.ctx.strokeText('Vertical Speed: ' + parseFloat(Math.round(this.lander.dy * 100)/10), 30, 105)
    this.ctx.strokeStyle = 'white';
  } else {
    this.ctx.strokeText('Vertical Speed: ' + parseFloat(Math.round(this.lander.dy * 100)/10), 30, 105)
  }

  this.ctx.strokeText('Horizontal Speed: ' + parseFloat(Math.round(this.lander.dx * 100)/10), 30, 135)
}

module.exports = Feedback
