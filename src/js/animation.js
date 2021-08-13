let animation = {
       
        restRight: [playerImageRightRest[0],playerImageRightRest[0],
            playerImageRightRest[1],playerImageRightRest[1],
            playerImageRightRest[2],playerImageRightRest[2],
            playerImageRightRest[3],playerImageRightRest[3],
            playerImageRightRest[4],playerImageRightRest[4],
            playerImageRightRest[5],playerImageRightRest[5],
            playerImageRightRest[6],playerImageRightRest[6],
            playerImageRightRest[7],playerImageRightRest[7]],
        restRightQuantity: 0,
        restRightFunction() {
        	if(animation.restRightQuantity < animation.restRight.length) {
   ctx.drawImage(animation.restRight[animation.restRightQuantity],player.x,player.y,player.width,player.height);
animation.restRightQuantity++;
} else  {
	animation.restRightQuantity = 0;
	ctx.drawImage(animation.restRight[0],player.x,player.y,player.width,player.height);
	animation.restRightQuantity++; 
}

},

right: [playerImageRightRun[0],playerImageRightRun[0],
            playerImageRightRun[1],playerImageRightRun[1],
            playerImageRightRun[2],playerImageRightRun[2],
            playerImageRightRun[3],playerImageRightRun[3],
            playerImageRightRun[4],playerImageRightRun[4],
            playerImageRightRun[5],playerImageRightRun[5],
            playerImageRightRun[6],playerImageRightRun[6],
            playerImageRightRun[7],playerImageRightRun[7]],
        rightQuantity: 0,
        rightFunction() {
        	
        	if(animation.rightQuantity < animation.right.length) {
   ctx.drawImage(animation.right[animation.rightQuantity],player.x,player.y,player.width,player.height);
animation.rightQuantity++;
} else  {
	animation.rightQuantity = 0;
	ctx.drawImage(animation.right[0],player.x,player.y,player.width,player.height);
	animation.rightQuantity++; 
}

},

 restLeft: [playerImageLeftRest[0],playerImageLeftRest[0],
            playerImageLeftRest[1],playerImageLeftRest[1],
            playerImageLeftRest[2],playerImageLeftRest[2],
            playerImageLeftRest[3],playerImageLeftRest[3],
            playerImageLeftRest[4],playerImageLeftRest[4],
            playerImageLeftRest[5],playerImageLeftRest[5],
            playerImageLeftRest[6],playerImageLeftRest[6],
            playerImageLeftRest[7],playerImageLeftRest[7]],
        restLeftQuantity: 0,
        restLeftFunction() {
        	if(animation.restLeftQuantity < animation.restLeft.length) {
   ctx.drawImage(animation.restLeft[animation.restLeftQuantity],player.x,player.y,player.width,player.height);
animation.restLeftQuantity++;
} else  {
	animation.restLeftQuantity = 0;
	ctx.drawImage(animation.restLeft[0],player.x,player.y,player.width,player.height);
	animation.restLeftQuantity++; 
}

},

left: [playerImageLeftRun[0],playerImageLeftRun[0],
            playerImageLeftRun[1],playerImageLeftRun[1],
            playerImageLeftRun[2],playerImageLeftRun[2],
            playerImageLeftRun[3],playerImageLeftRun[3],
            playerImageLeftRun[4],playerImageLeftRun[4],
            playerImageLeftRun[5],playerImageLeftRun[5],
            playerImageLeftRun[6],playerImageLeftRun[6],
            playerImageLeftRun[7],playerImageLeftRun[7]],
        leftQuantity: 0,
        leftFunction() {
        	
        	if(animation.leftQuantity < animation.left.length) {
   ctx.drawImage(animation.left[animation.leftQuantity],player.x,player.y,player.width,player.height);
animation.leftQuantity++;
} else  {
	animation.leftQuantity = 0;
	ctx.drawImage(animation.left[0],player.x,player.y,player.width,player.height);
	animation.leftQuantity++; 
}

},
  bottle: [bottleImage[0],bottleImage[0],
  bottleImage[1],bottleImage[1],
  bottleImage[2],bottleImage[2],
  bottleImage[3],bottleImage[3],
  bottleImage[4],bottleImage[4],
  bottleImage[5],bottleImage[5]],
  bottleQuantity: 0,
}

if(game) alert("анимация");