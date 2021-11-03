function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent");
    rectMode(CENTER);
}

function draw() {
    background(255);
    stroke(255, 200, 100);
    strokeWeight(3);
    line(0, 0, mouseX, mouseY);
    line(0, height, mouseX, mouseY);
    line(width, 0, mouseX, mouseY);
    line(width, height, mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}