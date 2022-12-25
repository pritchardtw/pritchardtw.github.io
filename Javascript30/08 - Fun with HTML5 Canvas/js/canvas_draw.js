console.log("it works!");

let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.onmousemove = draw;
canvas.onmousedown = (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
}
canvas.onmouseup = () => isDrawing = false;
canvas.onmouseout = () => isDrawing = false;

function draw(e) {
  if(isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if(hue >= 360) {
      hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
}
