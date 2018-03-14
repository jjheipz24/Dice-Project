/*
Jin Jin Heipler
10/25/17
IGME-101: Mini Project 2 - Dice
*/

var dice;
dice = new Array();
var x = 20;
var count;
var sum = 0;


function setup() {
    createCanvas(500, 500);
    backgroundClr();
    count = 0;
    textAlign(CENTER, CENTER);


}

function draw() {
    backgroundClr();

    //+ button
    fill(color('#F7F6C5'));
    rect(50, 300, 80, 60);
    // + text
    fill("black");
    textSize(42);
    text("+", 90, 330);

    //- button
    fill(color('#F7F6C5'));
    rect(200, 300, 80, 60);
    // - text
    fill("black");
    textSize(42);
    text("-", 240, 330);

    //reroll button
    fill(color('#F7F6C5'));
    rect(350, 300, 100, 60);
    // reroll text
    fill("black");
    textSize(22);
    text("Reroll All", 400, 330);

    //resets sum
    sum = 0;
    //displays the dice and the sum
    for (var i = 0; i < dice.length; i++) {
        dice[i].display();
        sum += dice[i].num;

    }

    fill("black");
    textSize(45);
    text("Sum = " + sum, 230, 450);

}


function backgroundClr() {
    var r = 156;
    var g = 42;
    var b = 237;
    var x = 0;
    var y = 0;
    for (var i = 0; i < height; i++) {
        stroke(color(r, g, b));
        line(0, y, width, y);
        y++;
        r = r - .20;
    }
}

function mouseClicked() {
    //Adds die
    if (mouseX > 50 && mouseX < 130 && mouseY > 300 && mouseY < 360 && count < 5) {
        dice.push(new Die(x, 50, Math.floor(random(1, 7))));
        x += 100;
        count++;
    }
    if (mouseX > 200 && mouseX < 280 && mouseY > 300 && mouseY < 360) {
        dice.pop();
        x -= 100;
        count--;
        backgroundClr();
    }

    // Rerolls first die
    if (mouseX > 20 && mouseX < 80 && mouseY > 50 && mouseY < 110) {
        dice[0].roll();
    }
    // Rerolls second die
    if (mouseX > 120 && mouseX < 180 && mouseY > 50 && mouseY < 110) {
        dice[1].roll();
    }

    // Rerolls third die
    if (mouseX > 220 && mouseX < 280 && mouseY > 50 && mouseY < 110) {
        dice[2].roll();
    }

    //Rerolls fourth die
    if (mouseX > 320 && mouseX < 380 && mouseY > 50 && mouseY < 110) {
        dice[3].roll();
    }

    // Rerolls fifth die
    if (mouseX > 420 && mouseX < 480 && mouseY > 50 && mouseY < 110) {
        dice[4].roll();
    }

    // Rerolls all the die
    if (mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 360) {
        dice[0].roll();
        dice[1].roll();
        dice[2].roll();
        dice[3].roll();
        dice[4].roll();
    }

}
