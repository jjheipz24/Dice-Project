// die object

class Die {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
        this.clr = color(252, 109, 171);
        this.num = num;

    }

    display() {
        fill(this.clr);
        rect(this.x, this.y, this.width, this.height);
        textSize(30);
        textAlign(CENTER, CENTER);
        fill("black");
        text(this.num, (this.x + this.width / 2), (this.y + this.height / 2));
    }

    roll() {
        this.num = Math.floor(random(1, 7));
    }
    
}
