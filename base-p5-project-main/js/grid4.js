function setup(){
    createCanvas(600, 600);
    background('#000');

}
const PADDING = 50;
const ROWS = 20;
const COLUMNS = 20;
const CELL_SIZE = 10;
const CELL_COLOR = '#222';
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
const CANVAS_COLOR = '#000';

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(CANVAS_COLOR);
    noStroke();
  
    fill(CELL_COLOR);
    for (let col=0;col<COLUMNS;col++) {
      for (let row=0;row<ROWS;row++) {
        let left = PADDING+(col*CELL_SIZE);
        let top = PADDING+(row*CELL_SIZE);
        let size = CELL_SIZE - 2;
        rect(left,top,size,size);
      }
    }
  }