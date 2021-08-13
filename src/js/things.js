class Bottle {
    constructor(x,y) {
    this.quantity = 0;
    this.x = x;
    this.y = y;
    this.life = 3;
   }
    draw () {
    	this.x2 = this.x + 120;
    this.y2 = this.y + 200;
    switch(this.life) {
    case 3:
       ctx.drawImage(bottleImage6, this.x,this.y,120,200);
     break;
     case 2:
       ctx.drawImage(bottleImage7, this.x,this.y,120,200);
     break;
     case 1:
       ctx.drawImage(bottleImage8, this.x,this.y,120,200);
     break;
    case 0:
    if(this.quantity < animation.bottle.length) {
   ctx.drawImage(animation.bottle[this.quantity],this.x,this.y,120,200);
this.quantity++;
} 
break;

}

    }
}

let things = {
	bottle: [],
	bottleQuantity: 0,
	drawBottle() {
	for (let i = 0; i < things.bottle.length; i++) {
	       things.bottle[i].draw();
	   }
	},
}

function createBottle(x,y) {
things.bottle[things.bottleQuantity] = new Bottle(x,y);
things.bottleQuantity++;
}