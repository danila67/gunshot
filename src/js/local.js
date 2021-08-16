import { hero, Hero } from "./hero";

const raw = localStorage.getItem("gunshot_player"),
person = JSON.parse(raw);

//localStorage.clear();
if (localStorage.getItem("gunshot_player")) {

  for (let i = 0; i < person.array.length; i++) {
    hero.array[i] = new Hero(person.array[i].name, person.array[i].scin, person.array[i].index);
  }

  hero.number = person.number;
} 

export function localStorageReturn() {

  let storage = {
    array: [],
    number: hero.number
  }

  for (let i = 0; i < hero.array.length; i++) {
    storage.array[i] = hero.array[i];
  }

	localStorage.setItem("gunshot_player", JSON.stringify(storage));
}
