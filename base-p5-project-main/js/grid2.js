let textures = [];
let colours;
function preload(){
    let texturesNum = 4;
    for(let i = 1; i <= texturesNum;i++){
      //  let texture = loadImage("images/artistcanvas"+i+".jpg"); //concatenation
      let t = loadImage(`images/artistcanvas${i}.jpg`); //backticks are template literals and dollar sign curly brace is string interpolation
      textures.push(t); //adds texture to textures array

    }

}
function setup() {
    let colours = [color(`#DDF8E8`), color(`#CDD5D1`), color(`#B4A6AB`), color(`#946E83`), color(`#615055`), color(`#08415C`), color(`#5F1A37`), color(`#36413E`)];
    createCanvas (500, 500);
    const CELL_SIZE = 40;
    let x =0;
    let y =0;
    noStroke()
    while(y < height){
        while(x < width){
            tint(random(colours))
            let t = random(textures);
            // rotate(random(PI))
            image(t, x+random(-3, 2), y+random(-3, 2), CELL_SIZE+random(-20, 20), CELL_SIZE+random(-20, 20))
            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x =0;

    }
    
}

