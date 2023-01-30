
// function setup() {
//     const CELL_SIZE = 5;
//     createCanvas(1000, 1000);
//     //noStroke();
//     let x = 0;
//     let y = 0;
//     // let xVariation = 5;
//     // let yVariation = 5;
//     // let widthVariation = 5;
//     // let heightVariation = 5;
//     let sizes = [CELL_SIZE, CELL_SIZE * 4, CELL_SIZE * 4];
//     let currentWidth = 20;
//     let currentHeight = 20;
//     let colours = [color(`#678677`), color('#cab993'), color('#1a253e'), color('#7f99c8'), color(`#9f956f`), color(`#234a5a`), color(`#a4c8a8`), color(`#696321`), color(`#494d5b`)];
//     strokeWeight(0.1);
//     while (y < height) {
//         while (x < width) {
//             fill(random(colours));
//             rect(x, y, currentWidth, currentHeight);
//             x += currentWidth;
//             let availableWidth = width - x;
//             currentWidth = 5;
//             while (currentWidth > availableWidth) {
//                 currentWidth -= CELL_SIZE;
//             }

//         }
//         y += currentHeight;
//         let availableHeight = height - y;
//         currentHeight = 5;
//         while (currentHeight > availableHeight) {
//             currentHeight -= CELL_SIZE;
//         }
//         x = 0;
//     }
// }
// function draw() {
// }
function setup(){
    createCanvas( 500, 500);
    noStroke();
}

function draw(){
    const columns = 5;
    const rows = 5;
    const cellWidth = width / columns;
    const cellHeight = height / rows;
    
    for (let c = 0; c < columns; c++){
        for (let r = 0; r < rows; r++){
            const x = c * cellWidth;
            const y = r * cellHeight;

            drawSquear(x,y, min(cellWidth, cellHeight));
        }

    }
}

function drawSquear(x,y, size){
    const squearSize = random(size * .10, size * 5);
    const squareSize = squearSize / 9;
    const placement = squareSize / 9;

    ellipse(x - placement, y - placement, squareSize);

    fill(random(255), random(255), random(255));
    square(x, y, squareSize);
}

