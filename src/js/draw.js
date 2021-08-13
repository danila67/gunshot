function returnGame() {
	player.returnPlayer();
	Zombie.returnZombie();
	map.returnMap();
	zombies.speed[0] = zombies.speed[1];
}


function drawImageRot(img,x,y,width,height,deg){
    ctx.save()
    var rad = deg * Math.PI / 180;
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rad);    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
    ctx.restore();
}

var angle = 0;

function draw() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	localStorageReturn();
	
	
	player.renewal();
	player.check();
	
	map.draw();
     
     if(phone) {
          controlPhone.draw();
          controlPhone.check();
     }
     
    // control.check();
     
     player.draw();
     player.gun[player.quantityGun].draw();
     zombies.draw();
     
     weapons.draw();
     
     things.drawBottle();
     table.drawTable();
	table.drawEnergy();
	 table.drawLife();
	 table.drawMenu();
	//drawImageRot(upImage,starX,starY,200,200,angle);
}

setInterval (draw, 25);