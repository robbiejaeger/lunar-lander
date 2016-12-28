var World = require('./world')
var Lander = require('./lander')
var UserControls = require('./user-controls')

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var userControls = new UserControls()
var lander = new Lander(50, 50, ctx)
var world = new World(canvas, ctx, userControls, lander)

world.runAnimationLoop()
