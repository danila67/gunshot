let player = {
	position: "left",
     x: 250,
     y: 250,
     positionReturn: [250,250],
     width: 120,
     height: 100,
     map: null, 
     gun: [], 
     life: 1,
     menu: false,
     quantityGun: 1, 
     returnPlayer() {
          player.position = "left";
          player.x = player.positionReturn[0];
          player.y = player.positionReturn[1];
          player.life = 1;
          player.gun[1].quantity = 30;
          player.gun[1].quantityMax = 60;
          player.gun[1].quantityMax2  = 2;
          player.gun[0].quantity = 10;
          player.gun[0].quantityMax = 20;
          player.gun[0].quantityMax2  = 2;
     },
     renewal() {
     	player.x2 = player.x + player.width;
         player.y2 = player.y + player.height;
     },
     check() {
     	if(player.life <= 0) player.menu = true;
     if(player.menu) {
	control.right = false;
	control.up = false;
	control.left = false;
	control.rest = true;
	control.down = false;
	zombies.speed[0] = 0;
     }
    /* if(player.y2 === 1000) {
     	player.y = 10;
         for (let i = 0; i < map.array.length; i++) {
         	map.array[i].y -= 1000;
         }
         
         for (let i = 0; i < zombies.array.length; i++) {
         	zombies.array[i].y -= 1000;
         }
         
         }
         if(player.y === 0) {
     	player.y = 800;
         for (let i = 0; i < map.array.length; i++) {
         	map.array[i].y += 1000;
         }
         
         for (let i = 0; i < zombies.array.length; i++) {
         	zombies.array[i].y += 1000;
         }
         
         }*/
     	switch(player.map) {
		case "lendDown":
	if(player.x >= 250 && player.x <= 750 && player.x2 >= 250 && player.x2 <= 750 && player.y >= 250 && player.y <= 1000 && player.y2 >= 250 && player.y2 <= 1000) {
    	speed[0] = speed[4];
        speed[1] = speed[4];
        speed[2] = speed[4];
        speed[3] = speed[4];
   } 
   break;
   case "lendUp":
	if(player.x >= 250 && player.x <= 750 && player.x2 >= 250 && player.x2 <= 750 && player.y >= 0 && player.y <= 750 && player.y2 >= 0 && player.y2 <= 750) {
    	speed[0] = speed[4];
        speed[1] = speed[4];
        speed[2] = speed[4];
        speed[3] = speed[4];
   } 
   break;
   }
   },
     changeGun() {
     		if(player.quantityGun === 0) {
	player.quantityGun++;
	} else {
		player.quantityGun--;
		}
     },
     draw() {
     	if (control.rest || control.left && control.right) {
		if(player.position === "left") {
     animation.restLeftFunction();
     } else { 
     	animation.restRightFunction();
     }
     }
     
     if (control.left) {
     player.x -= speed[1];
    animation.leftFunction();
    control.right = false;
     }
     
     if (control.right) {
   player.x += speed[0];
   animation.rightFunction();
   control.left = false;
     } 
     
    if (control.up) {
    	player.y -= speed[3];
     if(player.position === "left") {
     if(!control.left) animation.leftFunction();
     } else {
        if(!control.right) animation.rightFunction();
     }
     }
     
     if (control.down) {
     player.y += speed[2];
     if(player.position === "left") {
        if(!control.left) animation.leftFunction();
     } else {
        if(!control.right) animation.rightFunction();
     }
     } 
     },
}

if(game) alert("игрок");