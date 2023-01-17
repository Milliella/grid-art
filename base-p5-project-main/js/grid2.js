let textures = [];
function preload(){
    let texturesNum = 4;
    for(let i = 1; i <= texturesNum;i++){
      //  let texture = loadImage("images/artistcanvas"+i+".jpg"); //concatenation
      let t = loadImage(`images/artistcanvas${i}.jpg`); //backticks are template literals and dollar sign curly brace is string interpolation
      textures.push(t); //adds texture to textures array

    }

}
function setup() {
    createCanvas (800, 800);
    const CELL_SIZE = 80;
    let x =0;
    let y =0;
    noStroke()
    while(y < height){
        while(x < width){
            tint(random(255))
            let t = random(textures);
            image(t, x, y, CELL_SIZE)
            x+=CELL_SIZE;

        }
        y+=CELL_SIZE;
        x =0;

    }
    
}

