function UserControls() {
  this.activeControls = {
    rotateClockwise: false,
    rotateCounterClockwise: false,
    launch: false
  }
  this.addControlListener()
}

UserControls.prototype.addControlListener = function(){
  document.addEventListener('keyup', function(e){
    this.onKeyUp(e.keyCode)
  }.bind(this))

  document.addEventListener('keydown', function(e){
    this.onKeyDown(e.keyCode)
  }.bind(this))
}

UserControls.prototype.onKeyUp = function(keyCode){
  switch (keyCode) {
    case 37:
        this.activeControls.rotateCounterClockwise = false
      break
    case 39:
        this.activeControls.rotateClockwise = false
      break
    case 40:
        this.activeControls.launch = false
      break
  }
}

UserControls.prototype.onKeyDown = function(keyCode){
  switch (keyCode) {
    case 37:
        this.activeControls.rotateCounterClockwise = true
      break
    case 39:
        this.activeControls.rotateClockwise = true
      break
    case 40:
        this.activeControls.launch = true
      break
  }
}

module.exports = UserControls
