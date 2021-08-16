import { dom_id } from "./dom_id";
import { player, Player } from "./player";

export let range = document.getElementById('range').value;

export const hero = {
  array: [],
  number: 0,
  index: 0,

  checkScin() {
    range = document.getElementById('range').value;
    dom_id.image.src = 'images/' +range +'.png';
  },

  check() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].check();     
    }
  }
}

export class Hero {
  constructor(name, scin, index) {
    this.name = name;
    this.scin = scin;
    this.index = index;
    this.idName = '_' +this.name +'_' +this.index +'_';
    this.cretae();
  }

  play() {
    player.array[player.number] = new Player(0, 0, this.scin, this.name, player.number, 'zeck');
    hero.index = player.number;
    dom_id.menu.style.display = 'none';
    player.number++;
  }

  cretae() {
    this.button = document.createElement("button");
    this.button.innerHTML = this.name;
    this.button.id = this.idName;
		dom_id.login.appendChild(this.button);
		this.buttonID = document.getElementById(this.idName);
  }

  check() {
    this.buttonID.addEventListener('click', (event) => {
			this.play();   
		});
  }
}
