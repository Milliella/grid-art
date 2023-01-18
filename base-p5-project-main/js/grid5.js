
function setup() {
    const CELL_SIZE = 20;
    createCanvas(650, 650);
    noStroke();
    let x = 0;
    let y = 0;
    // let xVariation = 5;
    // let yVariation = 5;
    // let widthVariation = 5;
    // let heightVariation = 5;
    let sizes = [CELL_SIZE, CELL_SIZE * 4, CELL_SIZE * 4];
    let currentWidth = 20;
    let currentHeight = 20;
    let colours = [color(`#678677`), color('#cab993'), color('#1a253e'), color('#7f99c8'), color(`#9f956f`), color(`#234a5a`), color(`#a4c8a8`), color(`#696321`), color(`#494d5b`)];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            rect(x, y, currentWidth, currentHeight);
            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = 5;
            while (currentWidth > availableWidth) {
                currentWidth -= CELL_SIZE;
            }

        }
        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = 5;
        while (currentHeight > availableHeight) {
            currentHeight -= CELL_SIZE;
        }
        x = 0;
    }
}
function draw() {
}