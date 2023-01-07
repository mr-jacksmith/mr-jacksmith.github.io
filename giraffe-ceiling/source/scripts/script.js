const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

myString = "width: " + pageWidth + "; height: " + pageHeight;

var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.moveTo(0, pageHeight);

var gradient = ctx.createLinearGradient(0, pageHeight, pageWidth, 0);
gradient.addColorStop(0, '#78D9E2');
gradient.addColorStop(1, '#C6F1F5')
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, pageWidth, pageHeight)