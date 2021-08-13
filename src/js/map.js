class LendDown {
    constructor(x,y) {
    	this.x = x;
        this.y = y;
        this.positionReturn = [x,y];
     }
     check() {
     	this.x2 = this.x + 750;
        this.y2 = this.y + 250;
        this.x3 = this.x + 250;
        this.y3 = this.y + 1000;
        this.x4 = this.x + 1000;
        
     	if(player.x >= this.x && player.x <= this.x3 && player.y >= this.y2 && player.y <= this.y3) speed[1] = 0; //лева
         if(player.y >= this.y && player.y <= this.y2 && player.x >= this.x3 && player.x <= this.x2) speed[3] = 0;//вверх
         if(player.x2 >= this.x2 && player.x <= this.x4 && player.y >= this.y2 && player.y <= this.y3) speed[0] = 0;//вправа
         
         if(player.x >= this.x && player.x <= this.x4 && player.y >= this.y && player.y <= this.y3) player.map = "lendDown";
         
        for (let i = 0; i < weapons.array.length; i++) {
 const weapon = weapons.array[i]; 

        if (
            weapon.x >= this.x2 &&
            weapon.x <= this.x4 &&
            weapon.y >= this.y2 &&
            weapon.y <= this.y3
        )  weapon.local = false;
        
        if (
            weapon.x >= this.x &&
            weapon.x <= this.x3 &&
            weapon.y >= this.y2 &&
            weapon.y <= this.y3
        )  weapon.local = false;
    }
     }
     draw(){
     	//draw lend
     	ctx.beginPath();
         ctx.fillStyle = "Green";
         ctx.fillRect(this.x, this.y, 1000, 250);
         ctx.fillRect(this.x, this.y, 250, 1000);
         ctx.fillRect(this.x2, this.y2, 250, 750);
         
         ctx.beginPath();
         ctx.fillStyle = "Brown";
         ctx.fillRect(this.x3, this.y2, 500, 750);
      }
         
}


class LendUp {
    constructor(x,y) {
    	this.x = x;
        this.y = y;
        this.positionReturn = [x,y];
     }
     check() {
     	this.x2 = this.x + 750;
        this.y2 = this.y + 250;
        this.x3 = this.x + 250;
        this.y3 = this.y + 750;
        this.y4 = this.y + 1000;
        this.x4 = this.x + 1000;
        
     	if(player.x >= this.x && player.x <= this.x3 && player.y >= this.y && player.y <= this.y3) speed[1] = 0; //лева
         if(player.y2 >= this.y3 && player.y2 <= this.y4 && player.x >= this.x3 && player.x <= this.x2) speed[2] = 0;//вниз
         if(player.x2 >= this.x2 && player.x <= this.x4 && player.y >= this.y && player.y <= this.y3) speed[0] = 0;//вправа
         
         if(player.x >= this.x && player.x <= this.x4 && player.y >= this.y && player.y <= this.y4) player.map = "lendUp";
        
        for (let i = 0; i < weapons.array.length; i++) {
 const weapon = weapons.array[i]; 

        if (
            weapon.x >= this.x2 &&
            weapon.x <= this.x4 &&
            weapon.y >= this.y &&
            weapon.y <= this.y4
        )  weapon.local = false;
        
        if (
            weapon.x >= this.x &&
            weapon.x <= this.x3 &&
            weapon.y >= this.y &&
            weapon.y <= this.y4
        )  weapon.local = false;
    }
     }
     draw(){
     	//draw lend
     	ctx.beginPath();
         ctx.fillStyle = "Green";
         ctx.fillRect(this.x, this.y, 250, 1000);
         ctx.fillRect(this.x2, this.y, 250, 1000);
         ctx.fillRect(this.x, this.y3, 1000, 250);
         
         ctx.beginPath();
         ctx.fillStyle = "Brown";
         ctx.fillRect(this.x3, this.y, 500, 750);
      }
         
}
  

let map = {
	array: [],
	arrayQuantity: 0,
	draw() {
		
	for (let i = 0; i < map.array.length; i++) {
	    map.array[i].check();
        map.array[i].draw();
	   }
	
	},
	
	returnMap() {
		for(let i = 0; i < map.array.length; i++) {
		map.array[i].x = map.array[i].positionReturn[0];
		map.array[i].y = map.array[i].positionReturn[1];
		}
	},
	
}

function createLendDown(x, y) {
	map.array[map.arrayQuantity] = new LendDown(x, y);
	map.arrayQuantity++;
}
function createLendUp(x, y) {
	map.array[map.arrayQuantity] = new LendUp(x, y);
	map.arrayQuantity++;
}

if(game) alert("карта");