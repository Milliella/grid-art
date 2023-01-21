function setup() {
    const CELL_SIZE = 20;
    createCanvas(800, 800);
    background(13);
    let x = 0;
    let y = 0;
    let xVariation = 10;
    let yVariation = 10;
    let widthVariation = 10;
    let heightVariation = 20;
    let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            rect(x, y, CELL_SIZE, CELL_SIZE);
            fill(random(colours));
            ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE); //move these two (elipse + fill) and the same for the other two out of the if statement to have the original code back
            fill(random(colours));
            triangle(x, y, x + CELL_SIZE, y, x + CELL_SIZE / 2, y + CELL_SIZE);


        }

        y += CELL_SIZE;
        x = 0;
    }
}
function draw() {
}