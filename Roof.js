class Roof {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      'restitution': 0.3,
      'friction': 0.5,
      'density': 1.2

    }


    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
  }
  display() {
    push();
    ellipseMode(CENTER);
    strokeWeight(3);
    ellipse(this.body.position.x, this.body.position.y, this.weight, this.height);
    fill(255, 0, 255);
    pop();
  }
}
