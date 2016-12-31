var World = require('./world')
var Lander = require('./lander')
var UserControls = require('./user-controls')
var Maps = require('./maps')
var Collisions = require('./collisions')
var Feedback = require('./feedback')

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var userControls = new UserControls()
var lander = new Lander(50, 450, ctx)
var maps = new Maps(canvas, ctx)
var collisions = new Collisions(canvas, lander, maps)
var feedback = new Feedback(canvas, ctx, lander)
var world = new World(canvas, ctx, userControls, lander, maps, collisions, feedback)

world.runAnimationLoop()
