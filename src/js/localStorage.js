const raw = localStorage.getItem("player");
const person = JSON.parse(raw);

localStorage.clear();
if(localStorage.getItem("player")) {
	player.quantityGun = person.gun.quantityGun;
	player.gun[0].quantity = person.gun.quantity[0];
	player.gun[0].quantityMax2 = person.gun.quantityMax2[0];
	player.gun[0].quantityMax = person.gun.quantityMax[0];
	
	player.gun[1].quantity = person.gun.quantity[1];
	player.gun[1].quantityMax2 = person.gun.quantityMax2[1];
	player.gun[1].quantityMax = person.gun.quantityMax[1];
	player.x = person.player.x;
	player.y = person.player.y;
	
	for(let i = 0; i < person.map.length; i++) {
		map.array[i].x = person.map[i].x;
		map.array[i].y = person.map[i].y;
	}
	
	for(let i = 0; i < person.zombies.length; i++) {
		zombies.array[i].x = person.zombies[i].x;
		zombies.array[i].y = person.zombies[i].y;
	}
	
} 

function localStorageReturn() {
	let storage = {
	gun: {
		quantityGun: player.quantityGun,
		quantityMax2: [player.gun[0].quantityMax2,player.gun[1].quantityMax2],
		quantityMax: [player.gun[0].quantityMax,player.gun[1].quantityMax],
		quantity: [player.gun[0].quantity,player.gun[1].quantity],
	},
	player: {
	   x: player.x, 
	   y: player.y, 
	},
	map: [],
	zombies: []
}

	for(let i = 0; i < map.array.length; i++) {
		storage.map[i] = map.array[i];
	}
	for(let i = 0; i < zombies.array.length; i++) {
		storage.zombies[i] = zombies.array[i];
	}
	
	localStorage.setItem("player", JSON.stringify(storage));
}
if(game) alert ("база данных");





