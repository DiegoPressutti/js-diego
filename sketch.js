function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke("blue");
  fill("red")
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35)
  }
}
