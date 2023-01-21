
function setup() {
    createCanvas(800, 800);
    noLoop();
    noStroke();
  }
  
  function draw() {
    // background(0, 255, 100);
  
    const columns = 20;
    const rows = 50;
    const cellWidth = width / columns;
    const cellHeight = height / rows;
  
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * cellWidth + cellWidth / 200;
        const y = r * cellHeight + cellHeight / 200;
  
        drawFlower(x, y, min(cellWidth, cellHeight));
      }
    }
  }
  
  function drawFlower(x, y, size) {
    const flowerSize = random(size * .20, size * 10);
    const petalSize = flowerSize / 8;
    const spacing = petalSize / 9;
  
    fill(random(255), random(255), random(255));
    square(x - spacing, y - spacing, petalSize);
    square(x + spacing, y - spacing, petalSize);
    square(x - spacing, y + spacing, petalSize);
    square(x + spacing, y + spacing, petalSize);
  
    fill(random(255), random(255), random(255));
    square(x, y, petalSize);
  }