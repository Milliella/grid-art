
function setup() {
    const CELL_SIZE = 160;
    createCanvas(800, 800);
    background(255);
    //noStroke();
    let x = 0;
    let y = 0;
    let xVariation = 5;
    let yVariation = 10;
    let widthVariation = 10;
    let heightVariation = 20;
    let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            // rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random
            // (-heightVariation, heightVariation));
            rect(x, y, CELL_SIZE, CELL_SIZE);
            fill(random(colours));
            ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE);
            fill(random(colours));
            triangle(x, y, x + CELL_SIZE, y, x + CELL_SIZE / 2, y + CELL_SIZE);

            // if (random(1) > 0.5) {

            // } else {

            // }
            x += CELL_SIZE;


        }

        y += CELL_SIZE;
        x = 0;
    }
}
function draw() {
}

function setup() {
    const CELL_SIZE = 160;
    createCanvas(1000, 1000);
    background(255);
    //noStroke();
    let x = 0;
    let y = 0;
    let xVariation = 5;
    let yVariation = 10;
    let widthVariation = 10;
    let heightVariation = 20;
    let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            // rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random
            // (-heightVariation, heightVariation));
            rect(x, y, CELL_SIZE, CELL_SIZE);
            
            

            if (random(1) > 0.5) {
                ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE); //move these two (elipse + fill) and the same for the other two out of the if statement to have the original code back
                fill(random(colours));
            } else {
                fill(random(colours));
                triangle(x, y, x + CELL_SIZE, y, x + CELL_SIZE / 2, y + CELL_SIZE);
             }
            x += CELL_SIZE;


        }

        y += CELL_SIZE;
        x = 0;
    }
}
function draw() {
}

