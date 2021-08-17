import { player } from "../player";
import { ctx } from "../cnv";

export class Box {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
  }

  check() {
    this.x2 = this.x + 100;
    this.y2 = this.y + 100;

    for (let i = 0; i < player.array.length; i++) {
      const p = player.array[i];

      if (this.x === p.x2 && this.y <= p.y && this.y2 >= p.y || this.x === p.x2 && this.y <= p.y2 && this.y2 >= p.y2) {
        p.go[3] = false;
      } 
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, 100, 100);
  }
}

export const box = {
  array: [],
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw();     
    }
  },
  check() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].check();     
    }
  }
}

box.array[0] = new Box(500, 100, 0);

box.array[1] = new Box(500, 300, 1);
