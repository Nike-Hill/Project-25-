class TrashCan {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.TrashCan = loadImage("TrashCan.png");
      World.add(world, this.body);
    }
    display(){
      image(this.TrashCan,315,500,130,187)
      var pos = this.body.position;
      rectMode(CENTER);
      stroke("white");
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };