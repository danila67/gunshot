import { dom_id } from "./dom_id";
import { hero, Hero, range } from "./hero";

export const fun_dom = {
  get_id: {
    complete: document.getElementById("button_complete"),
    login: document.getElementById("button_login"),
    back: document.getElementById("button_back")
  },
  check() {
    this.get_id.complete.addEventListener('click', (event) => {
      const text = document.getElementById('text').value;
      hero.array[hero.number] = new Hero(text, range, hero.number)
      hero.array[hero.number].play();
      hero.number++;
    });

    this.get_id.login.addEventListener('click', (event) => {
      dom_id.akk.style.display = 'block';
      dom_id.menu2.style.display = 'none';
    });

    this.get_id.back.addEventListener('click', (event) => {
      dom_id.akk.style.display = 'none';
      dom_id.menu2.style.display = 'block';
    });
  }
}