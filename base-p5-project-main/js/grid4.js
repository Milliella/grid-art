
function setup() {
    const CELL_SIZE = 20;
    createCanvas(600, 600);
    //noStroke();
    let x = 0;
    let y = 0;
    // let xVariation = 5;
    // let yVariation = 5;
    // let widthVariation = 5;
    // let heightVariation = 5;
    let sizes = [CELL_SIZE, CELL_SIZE * 4, CELL_SIZE * 4];
    let currentWidth = 20;
    let currentHeight = 20;
    let colours = [color(`#8e7a40`), color('#323833'), color('#9d91b6'), color('#d1b051'), color(`#9f9985`), color(`#d6c962`), color(`#b3a94d`), color(`#5c6734`), color(`#713641`)];
    strokeWeight(0.1);
    while (y < height) {
        while (x < width) {
            fill(random(colours));
            rect(x, y, currentWidth, currentHeight);
            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = 20;
            while (currentWidth > availableWidth) {
                currentWidth -= CELL_SIZE;
            }

        }
        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = 20;
        while (currentHeight > availableHeight) {
            currentHeight -= CELL_SIZE;
        }
        x = 0;
    }
}


