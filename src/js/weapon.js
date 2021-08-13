class Weapon {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.local = true;
		this.a = true;
	}
	check() {
		this.x2 = this.x + 10;
		this.y2 = this.y + 10;
   if (!this.local) return;

    for (let i = 0; i < things.bottle.length; i++) {
        const thingsBottle = things.bottle[i];
        if(thingsBottle.life > 0) {
        if (
            this.x >= thingsBottle.x &&
            this.x <= thingsBottle.x2 &&
            this.y >= thingsBottle.y &&
            this.y <= thingsBottle.y2
        )  {
      this.local = false;
      thingsBottle.life--;
      }
      }
    }
}
	draw() {
		if(this.local) {
		
		if(this.pos === "right") {
			ctx.drawImage(weaponImageRight,this.x,this.y, 10, 10);
			if(this.x < 10000) this.x += 50;
		}
		
		if(this.pos === "left") {
			ctx.drawImage(weaponImageLeft,this.x,this.y, 10, 10);
			if(this.x > -10000) this.x -= 50;
		}
		
		}
		
		if(this.a) {
		if(player.position === "right") {
		this.pos = "right";
		this.a = false;
		}
		
		if(player.position === "left") {
		this.pos = "left";
		this.a = false;
		}
		}
		
	}
}
     
let weapons = {
	array: [],
	quantity: 0,
	draw() {
		for (let i = 0; i < weapons.array.length; i++) {
	    weapons.array[i].draw();
	    weapons.array[i].check();
	}
	},
}

let avrora = {
	quantity: 10,
	quantityWeapon: 0,
	quantityMax2: 2, 
	quantityMax: 20,
	draw() {
		if(player.position === "right") {
		this.x = player.x + 50;
		this.y = player.y + 60;
		this.xWeapon = this.x + 100;
		this.yWeapon = this.y + 5;
		this.x2 = this.x + 50;
		this.y2 = this.y + 15;
		//ctx.drawImage(avroraImage,thi	s.x,this.y, 100, 30);
		drawImageRot(avroraImage,this.x,this.y,100,30,angle);

		canvas.addEventListener('mousedown', function(e) {
			const x = e.clientX;
			const y = e.clientY;
	    angle = Math.atan2(x - this.x2, - (y - this.y2) )*(180/Math.PI);      
	});
}
		
		if(player.position === "left") {
		this.x = player.x - 20;
		this.y = player.y + 60;
		this.xWeapon = this.x;
		this.yWeapon = this.y + 5;
		this.x2 = this.x + 50;
		this.y2 = this.y + 15;
		//ctx.drawImage(avroraImage2,avrora.x,avrora.y, 100, 30);
		drawImageRot(avroraImage2,this.x,this.y,100,30,angle);

		canvas.addEventListener('mousedown', function(e) {
			const x = e.clientX;
			const y = e.clientY;
	    angle = Math.atan2(x - this.x2, - (y - this.y2) )*(180/Math.PI);      
		});

}
		
		
	},
	shot() {
		let xWeapon = avrora.xWeapon;
		let yWeapon = avrora.yWeapon;
		if(avrora.quantity > 0) {
		weapons.array[weapons.quantity] = new Weapon(xWeapon, yWeapon, weapons.quantity);
		weapons.quantity++;
		avrora.quantity--;
		} 
		if(avrora.quantityMax2 > 0) {
         if(avrora.quantity === 0) {
			avrora.quantityMax -= 10;
			avrora.quantity = 10;
			avrora.quantityMax2--;
			}
			}
	},
	
}

player.gun[0] = avrora;

let mp33 = {
	quantity: 30,
	quantityWeapon: 0,
	quantityMax2: 2, 
	quantityMax: 60,
	draw() {
		if(player.position === "right") {
		mp33.x = player.x + 30;
		mp33.y = player.y + 50;
		mp33.xWeapon = mp33.x + 150;
		mp33.yWeapon = mp33.y + 10;
		ctx.drawImage(mp33Image,mp33.x,mp33.y, 150, 50);
		}
		
		if(player.position === "left") {
		mp33.x = player.x - 50;
		mp33.y = player.y + 50;
		mp33.xWeapon = mp33.x;
		mp33.yWeapon = mp33.y + 10;
		ctx.drawImage(mp33Image2,mp33.x,mp33.y, 150, 50);
		}
		
		
	},
	shot() {
		let xWeapon = mp33.xWeapon;
		let yWeapon = mp33.yWeapon;
		if(mp33.quantity > 0) {
		weapons.array[weapons.quantity] = new Weapon(xWeapon, yWeapon, weapons.quantity);
		weapons.quantity++;
		mp33.quantity--;
		} 
		if(mp33.quantityMax2 > 0) {
         if(mp33.quantity === 0) {
			mp33.quantityMax -= 30;
			mp33.quantity = 30;
			mp33.quantityMax2--;
			}
			}
	},
	
}

player.gun[1] = mp33;

if(game) alert("gun");