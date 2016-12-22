var World = require('./world')
var Lander = require('./lander')

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var lander = new Lander(10, 10, 50, 50, ctx)

var world = new World(canvas, ctx, lander)
world.runAnimationLoop()
