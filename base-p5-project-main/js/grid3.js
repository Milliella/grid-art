// function setup() {
//     const CELL_SIZE = 20;
//     createCanvas(800, 800);
//     background(255);
//     //noStroke();
//     let x = 0;
//     let y = 0;
//     let xVariation = 5;
//     let yVariation = 5;
//     let widthVariation = 5;
//     let heightVariation = 5;
//     let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
//     let currentWidth = random(sizes);
//     let currentHeight = random(sizes);
//     let colours = [color(`#C0BCB5`), color('#4A6C6F'), color('#846075'), color('#AF5D63')];
//     strokeWeight(0.5);
//     while (y < height) {
//         while (x < width) {
//             fill(random(colours));
//             square(x, y, currentWidth, currentHeight);
//             x += currentWidth;
//             let availableWidth = width - x;
//             currentWidth = random(sizes);
//             while (currentWidth > availableWidth) {
//                 currentWidth -= CELL_SIZE;
//             }

//         }

//         y += currentHeight;
//         let availableHeight = height - y;
//         currentHeight = random(sizes);
//         while (currentHeight > availableHeight) {
//             currentHeight -= CELL_SIZE;
//         }
//         x = 0;
//     }
// }
// function draw() {
// }



// original code for grid 1:
// function setup() {
//     const CELL_SIZE = 40;
//     createCanvas(800, 800);
//     background(255);
//     //noStroke();
//     let x = 0;
//     let y = 0;
//     let xVariation = 5;
//     let yVariation = 10;
//     let widthVariation = 10;
//     let heightVariation = 20;
//     let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
//     let currentWidth = random(sizes);
//     let currentHeight = random(sizes);
//     let colours = [color(`#D81E5B`), color('#bc3917'), color('#1b1f2a'), color('#d8a91d')];
//     strokeWeight(5);
//     while (y < height) {
//         while (x < width) {
//             fill(random(colours));
//             // rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation),
//             // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random
//             // (-heightVariation, heightVariation));
//             rect(x, y, currentWidth, currentHeight);
//             x += currentWidth;
//             let availableWidth = width - x;
//             currentWidth = random(sizes);
//             while (currentWidth > availableWidth) {
//                 currentWidth -= CELL_SIZE;
//             }

//         }

//         y += currentHeight;
//         let availableHeight = height - y;
//         currentHeight = random(sizes);
//         while (currentHeight > availableHeight) {
//             currentHeight -= CELL_SIZE;
//         }
//         x = 0;
//     }
// }
// function draw() {
// }

function setup() {
    const CELL_SIZE = 160;
    createCanvas(800, 800);
    background(255);
    //noStroke();
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
            // rect(x+random(-xVariation, xVariation),y + random(-yVariation, yVariation),
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random
            // (-heightVariation, heightVariation));
            rect(x, y, CELL_SIZE, CELL_SIZE);
            ellipse(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE); //move these two (elipse + fill) and the same for the other two out of the if statement to have the original code back
            fill(random(colours));
            fill(random(colours));
            triangle(x, y, x + CELL_SIZE, y, x + CELL_SIZE / 2, y + CELL_SIZE)

            // if (random(1) > 0.5) {

            // } else {
            //     ;
            // }
            // x += CELL_SIZE;


        }

        y += CELL_SIZE;
        x = 0;
    }
}
function draw() {
}

