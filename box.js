class Box {

    //constructor() :inbuilt function
    //constructor consists of properties
    constructor(x, y, w, h) {
        var option = {
            restitution: 1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(engineWorld, this.body);
    }

    display() {
        fill("white");
        stroke("green");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }






}