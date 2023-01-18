
function setup() {
    const CELL_SIZE = 40;
    createCanvas(500, 500);
    background(255);
    //noStroke();
    let x = 0;
    let y = 0;
    let xVariation = 5;
    let yVariation = 10;
    let widthVariation = 10;
    let heightVariation = 20;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            // rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random
            // (-heightVariation, heightVariation));
            rect(x, y, currentWidth, currentHeight);
            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = random(sizes);
            while (currentWidth > availableWidth) {
                currentWidth -= CELL_SIZE;
            }

        }

        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
        while (currentHeight > availableHeight) {
            currentHeight -= CELL_SIZE;
        }
        x = 0;
    }
}
function draw() {
}