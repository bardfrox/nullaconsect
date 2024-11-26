const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Define gradient from (10, 10) to (290, 140)
let bounds = { x1: 10, y1: 10 }; // Example bounds
let x1 = 0, y1 = 0, x2 = 1, y2 = 1; // Example coordinates
let w = canvas.width, h = canvas.height; // Example canvas dimensions

let gradient = context.createLinearGradient(bounds.x1 + x1 * w, bounds.y1 + y1 * h, bounds.x1 + x2 * w, bounds.y1 + y2 * h);

// Define gradient colors
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');

// Use the gradient to fill a rectangle
context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);
