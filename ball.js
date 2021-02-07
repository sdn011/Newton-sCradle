class Ball{
    constructor(x, y, width, height,) {
        this.body = Bodies.ellipse(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink")
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}