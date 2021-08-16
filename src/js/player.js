import { ctx } from "./cnv";
import { scin } from "./images";

const speed = 10;

export class Player {
  constructor(x, y, scin, name, index, who) {
    this.x = x;
    this.y = y;
    this.scin = scin;
    this.name = name;
    this.index = index;
    this.who = who;
    this.up = false; 
    this.down = false;
    this.left = false;
    this.right = false;
    this.gun = null;
  }

  check() {
    if(this.who === 'zeck') this.position = 'right';
    else this.position = 'left';

    if(this.up) this.y -= speed;

    if(this.down) this.y += speed;

    if(this.left) this.x -= speed;

    if(this.right) this.x += speed;
  }

  draw() {
    this.x2 = this.x + 100;
    this.y2 = this.y + 100;
    
    ctx.font = "25px serif";
	  ctx.fillStyle = "black";
    ctx.fillText(this.name, this.x + 20, this.y + 10);
    ctx.drawImage(scin[this.scin], this.x, this.y,100,100);
  }
}

export const player = {
  array: [],
  number: 0,
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw(); 
      this.array[i].check();     
    }
  }
}

