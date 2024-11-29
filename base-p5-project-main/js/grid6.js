
function setup() {
    createCanvas(800, 800);
    noLoop();
    noStroke();
  }
  
  function draw() {
   
  
    const columns = 30;
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
    const flowerSize = random(size * 15, size *15);
    const petalSize = flowerSize / 35;
    const spacing = petalSize / 2;
  
    fill(random(255), random(255), random(255));
    circle(x - spacing, y - spacing, petalSize);
    circle(x + spacing, y - spacing, petalSize);
    circle(x - spacing, y + spacing, petalSize);
    circle(x + spacing, y + spacing, petalSize);
  
    fill(random(255), random(255), random(255));
    circle(x, y, petalSize);
  }