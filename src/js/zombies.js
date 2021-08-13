
let zombies = {
	array: [],
	quantity: 0,
	speed: [5,5],
	draw() {
		for(let i = 0; i < zombies.array.length; i++) {
			zombies.array[i].check();
			zombies.array[i].draw();
		}
	},
}

class Zombie {
	constructor(x, y, x2) {
		this.x = x;
		this.y = y;
		this.x3 = x;
		this.x2 = x2;
		this.positionReturn = [x,y];
		this.position = "left";
		this.life = 100;
		this.local = true;
		this.a = true;
		this.b = true;
		this.rest = false;
		this.size = 300;
	}
	static returnZombie() {
		for(let i = 0; i < zombies.array.length; i++) {
		zombies.array[i].x = zombies.array[i].positionReturn[0];
		zombies.array[i].y = zombies.array[i].positionReturn[1];
		zombies.array[i].life = 100;
		zombies.array[i].rest = true;
		zombies.array[i].local = true;
		zombies.array[i].position = "left";
		}
	}
	check() {
		
		this.x4 = this.x + 100;
		this.y2 = this.y + 100;
		this.x5 = this.x + this.size;
		this.y5 = this.y + this.size;
		this.x6 = this.x - this.size;
		this.y6 = this.y - this.size;
		
		if(this.x === this.x3) this.position = "left";
		if(this.x4 === this.x2) this.position = "right";
		
		if(this.local) {
		
		if(player.x > this.x6 && player.x < this.x5 && player.y > this.y6 && player.y < this.y5) {
			this.rest = false;
		} else {
			this.rest = true;
			}
			
			if(this.rest) {
		switch(this.position) {
			case "right":
			if(this.x > this.x3) this.x -= zombies.speed[0];
			break;
			case "left":
			if(this.x < this.x2) this.x += zombies.speed[0];
			break;
		} 
     } else {
			 if(player.y >= this.y) this.y += zombies.speed[0];
          if(player.x >= this.x) this.x += zombies.speed[0];
          if(player.y <= this.y) this.y -= zombies.speed[0];
          if(player.x <= this.x) this.x -= zombies.speed[0];
          }
          
		
		
		for (let i = 0; i < weapons.array.length; i++) {
 const weapon = weapons.array[i]; 
        if (
            weapon.x >= this.x &&
            weapon.x <= this.x4 &&
            weapon.y >= this.y &&
            weapon.y <= this.y2
        )  {
        	if(weapon.local) {
        	this.life -= 20;
      weapon.local = false;
      }
      }
      
      if (
            weapon.x2 >= this.x &&
            weapon.x2 <= this.x4 &&
            weapon.y2 >= this.y &&
            weapon.y2 <= this.y2
        )  {
        		if(weapon.local) {
        	this.life -= 20;
      weapon.local = false;
      }
      }
      }
      
      if(this.x4 >= player.x && this.x4 <= player.x2 && this.y2 >= player.y && this.y2 <= player.y2) {
      if(this.a) {
   	player.life--;
          this.position = "left";
          this.a = false;
          }
          } else {
          	this.a = true;
          }
          
          
          if(this.x >= player.x && this.x <= player.x2 && this.y >= player.y && this.y <= player.y2) {
      if(this.b) {
   	player.life--;
          this.position = "right";
          this.b = false;
          }
          } else {
          	this.b = true;
          }
          
        
      }
      
      
      
      if(this.life <= 0) this.local = false;
	}
	draw() {
		if(this.local) {
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(this.x,this.y,100,100);
		
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,this.life,10);
		
		}
	}
}

function createZombie(x,y,x2) {
	zombies.array[zombies.quantity] = new Zombie(x,y,x2);
	zombies.quantity++;
}