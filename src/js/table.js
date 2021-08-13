const table = {
	positionTable: [0,0],
	
	positionEnergy: [10,20],
	
	tableSize: [200, 200], 
	
    drawTable() {
    	ctx.beginPath();
        ctx.fillStyle = "black";
     	ctx.fillRect(table.positionTable[0],table.positionTable[1],table.tableSize[0], table.tableSize[1]);
    },
    
    drawEnergy() {
    	//PerfectDOSVGA437
        ctx.drawImage(weaponImage,table.positionEnergy[0], table.positionEnergy[1], 100, 100);
        	ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = "30px Verdana";
        
            ctx.fillText(player.gun[player.quantityGun].quantity +"/" +player.gun[player.quantityGun].quantityMax, 90, 80);
    },
    
    drawLife() {
    	ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = "30px Verdana";
        ctx.fillText("life" +player.life, 10, 150);
    },
    
    drawMenu() {
    	if(player.menu) {
    	ctx.drawImage(menuImage, 200,200);
        ctx.drawImage(menuOkImage, 450,450);
    }
    },
    
}