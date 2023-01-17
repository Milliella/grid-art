function setup() {
    const CELL_SIZE = 40;
    createCanvas(1200, 1200);
    background(255);
    //noStroke();
    let x = 0;
    let y = 0;
    let xVariation = 5;
    let yVariation = 5;
    let widthVariation = 5;
    let heightVariation = 5;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
    //strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            ellipse(x, y, currentWidth, currentHeight);
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