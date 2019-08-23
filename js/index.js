// create a canvas element
var canvas = document.createElement("canvas")

// attach element to DOM
document.getElementsByTagName("body")[0].appendChild(canvas)

// background color [r, g, b] 
var bg = [150, 50, 50]

var loop1 = new Looper(300, 0) // create an instance of looper - this will start at 1 and count up to 100

// get the canvas context (this is the part we draw to)
var ctx = canvas.getContext("2d")

function setup() {
  // setup the canvas size to match the window
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  // set the 0,0 point to the middle of the canvas, this is not necessary but it can be handy
  ctx.translate(canvas.width / 2, canvas.height / 2)
}

// fill entire canvas with a preset color
function fill(rgb, amt) {
  ctx.beginPath(); // start path
  ctx.rect(- canvas.width / 2, - canvas.height / 2, canvas.width, canvas.height) // set rectangle to be the same size as the window
  ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${amt})` // use the rgb array/color for fill, and amt for opacity
  ctx.fill() // do the drawing
}

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x ,y , r, 0, 2 * Math.PI);
  ctx.fillStyle = 'white'
  ctx.fill()
}

function draw() {
  // fill context with background color 
  fill(bg, 0.01)

  // draw a white circle with (x, y, radius)
  // the x uses the loop value (it is offset by half of the range, to be centered)
//  drawCircle(loop1.val - loop1.range / 2, 0, 50)
	//drawCircle((loop1.norm - 0.5) * (canvas.width - 100), 0, 50)
	//drawCircle((loop1.sin) * (canvas.width - 100), 0, 50)
	drawCircle((loop1.sinNorm - 0.5) * (canvas.width - 100), 0, 50)
  
  // increment/update loop1 value
  loop1.update()

  // this is a draw loop, this will execute frequently and is comparable to EnterFrame on other platform
  window.requestAnimationFrame(function(){draw()})
}

// start enterFrame loop
window.requestAnimationFrame(draw);

// force running setup
setup()

// re-setup canvas when the size of the window changes 
window.addEventListener("resize", setup)



// create a class to hold value and have built in incrementing functionality
function Looper (range, start) {
  this.val = start || 0 // set value to start value if defined, or 1
  this.range = range || 100 // set range to passed value or default to 0
  this.norm = this.val / this.range // initialize normalized value (between 0 and 1)

	this.sin = Math.sin(this.norm * Math.PI * 2) // get sine value from norm normalized to [0, 2PI]
  this.sinNorm = (this.sin + 1) / 2 // normalize to [0,1]

  this.update = function () {
    this.val = (this.val + 1) % this.range // update value
    this.norm = this.val / this.range // update normalize value (between 0 and 1)
	  this.sin = Math.sin(this.norm * Math.PI * 2) // get sine value from norm normalized to [0, 2PI]
    this.sinNorm = (this.sin + 1) / 2 // normalize sine to [0,1]
  }
}
