import { weapon, Weapon } from "./weapon";
import { ctx } from "../cnv";
import { gunImage } from "../images";
import { player } from "../player";

export class M14 {
  constructor(x, y, index) {
    this.amount = 10;
    this.have = false;
    this.x = x;
    this.index = index;
    this.y = y;
    this.x2 = this.x + 70;
    this.y2 = this.y + 10;
  }

  draw() {
    if(this.have) {
      this.x = player.array[this.player].x + 25;
      this.y = player.array[this.player].y + 60;
      this.x2 = this.x + 70;
      this.y2 = this.y + 20;
    }

    ctx.drawImage(gunImage[0],this.x, this.y, 70, 20);
  }

  give() {
    if(this.have) return;
    for (let i = 0; i < player.array.length; i++) {
      const p = player.array[i];

      if (this.x >= p.x && this.x <= p.x2 && this.y >= p.y && this.y <= p.y2) {
        this.player = p.index;
        this.have = true;
        p.gun = this.index;
      }
    }
  }

  shot() {
    this.xWeapon = this.x + 60;
    this.yWeapon = this.y + 3;
    if(this.amount > 0) {
      weapon.array[weapon.number] = new Weapon(this.xWeapon, this.yWeapon, 50, player.array[this.player].position);
    }
    weapon.number++;
  }
}

export const m14 = {
  array: [],
  number: 0,
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw();     
    }
  },

  give() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].give();     
    }
  }
}

m14.array[0] = new M14(1000, 500, 0)

