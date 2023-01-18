
// function setup() {
//     const CELL_SIZE = 20;
//     createCanvas(600, 600);
//     background(255);
//     noStroke();
//     let x = 0;
//     let y = 0;
//     // let xVariation = 5;
//     // let yVariation = 5;
//     // let widthVariation = 5;
//     // let heightVariation = 5;
//     let sizes = [CELL_SIZE, CELL_SIZE * 4, CELL_SIZE * 4];
//     let currentWidth = random(sizes);
//     let currentHeight = random(sizes);
//     let colours = [color(`#8e7a40`), color('#323833'), color('#9d91b6'), color('#d1b051'), color(`#9f9985`), color(`#d6c962`), color(`#b3a94d`), color(`#5c6734`), color(`#713641`)];
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

var numberOfRows; //determine the number of rows we want
var numberOfColumns; //determine the number of columns we want

var xStep; //determine the size of the gap between two points on the x axis
var yStep; //determine the size of the gap between two points on the y axis

var positions = []; //an array of positions where we will store each of our Vectors

function setup(){
  numberOfColumns = 5; //we want 16 columns
  numberOfRows =5; //we want 9 rows
  
  xStep = width/numberOfColumns; //to make sure they are evenly spaced, we divide the width and height by numberOfColumns
  yStep = height/numberOfRows; //and numberOfRows respectively
  
  for(var x = 0; x < width; x += xStep){ //start at the first column, where x = 0
  
    for(var y = 0; y < height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
    
      var p = createVector(x, y); //we create a vector at this location
      
      positions.push(p); // and then we put the vector into the array
      
    }
    //at the end of the inner for loop, we go back to the first loop, and we increment x
    //now our column is going to be x = xStep*1, and we populate all the rows with the inner for loop
    //and again, and again until x > width
  }
}

function draw(){
  fill(250, 100, 100); //pink is cool
  
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    square(positions[i].x, positions[i].y, 10, 10); //put a circle at each of them
  }
}