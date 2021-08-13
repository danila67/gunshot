let shot = true;
let change = true;
//для компа
let control = {
	rest: true,
    left: false,
    up: false,
    down: false,
    right: false,
    check() {
	change = true;
     },
}

document.addEventListener('keydown', function(event) {
  if (event.code == "KeyA") {
  	control.left = true;
      control.rest = false;
      player.position = "left";
  }
  
    if (event.code == "KeyW") {
  	control.up = true;
      control.rest = false;
  }
  
    if (event.code == "KeyS") {
  	control.down = true;
      control.rest = false;
  }
  
    if (event.code == "KeyD") {
  	control.right = true;
      control.rest = false;
      player.position = "right";
  }
  
  if (event.code == "KeyE") {
  	player.gun[player.quantityGun].shot();
  }
  
  if (event.code == "KeyR") {
  	 if(change) {
       player.changeGun();
       change = false;
    }
  }
  if(player.menu) {
  	  if (event.code == "KeyF") {
  	returnGame();
  player.menu = false;
  }
  }
  
});

document.addEventListener('keyup', function(event) {
	 if (event.code == "KeyA") {
  	control.left = false;
      control.rest = true;
  }
  
    if (event.code == "KeyW") {
  	control.up = false;
      control.rest = true;
  }
  
    if (event.code == "KeyS") {
  	control.down = false;
      control.rest = true;
  }
  
    if (event.code == "KeyD") {
  	control.right = false;
      control.rest = true;
  }
});



//для телефона
const controlPhone = {
	
	positionUp: [100, 700, 200, 800], 
	positionDown: [100, 900, 200, 1000], 
	positionLeft: [0, 800, 100, 900], 
	positionRight: [200, 800, 300, 900], 
	positionShot: [0,700,100,800],
	positionChange: [100,800,200,900],
	positionMenuOk: [400,400,500,500],
	
	check() {
		shot = true;
		const canvas = document.querySelector('canvas')
       canvas.addEventListener('mousedown', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    //up
    if(x > controlPhone.positionUp[0] && x < controlPhone.positionUp[2] && y > controlPhone.positionUp[1] && y < controlPhone.positionUp[3]) {
    control.right = false;
	control.up = true;
	control.left = false;
	control.rest = false;
	control.down = false;
    }
    //down
    if(x > controlPhone.positionDown[0] && x < controlPhone.positionDown[2] && y > controlPhone.positionDown[1] && y < controlPhone.positionDown[3]) {
    control.right = false;
	control.up = false;
	control.left = false;
	control.rest = false;
	control.down = true;
    }
    //left
    if(x > controlPhone.positionLeft[0] && x < controlPhone.positionLeft[2] && y > controlPhone.positionLeft[1] && y < controlPhone.positionLeft[3]) {
    control.right = false;
	control.up = false;
	control.left = true;
	control.rest = false;
	control.down = false;
	player.position = "left";
    }
    //right
    if(x > controlPhone.positionRight[0] && x < controlPhone.positionRight[2] && y > controlPhone.positionRight[1] && y < controlPhone.positionRight[3]) {
    control.right = true;
	control.up = false;
	control.left = false;
	control.rest = false;
	control.down = false;
	player.position = "right";
    }
    
    //shot
     if(x > controlPhone.positionShot[0] && x < controlPhone.positionShot[2] && y > controlPhone.positionShot[1] && y < controlPhone.positionShot[3]) {
     if(shot) {
       player.gun[player.quantityGun].shot();
       shot = false;
    }
    } 
    
    if(x > controlPhone.positionChange[0] && x < controlPhone.positionChange[2] && y > controlPhone.positionChange[1] && y < controlPhone.positionChange[3]) {
    player.changeGun();
    }
    
     if(player.menu) {
  	  if (x > controlPhone.positionMenuOk[0] && x < controlPhone.positionMenuOk[2] && y > controlPhone.positionMenuOk[1] && y < controlPhone.positionMenuOk[3]) {
  	returnGame();
  player.menu = false;
  }
  }
})
	}, 
	draw() {
		ctx.drawImage(upImage, controlPhone.positionUp[0], controlPhone.positionUp[1], 100, 100);
		ctx.drawImage(downImage, controlPhone.positionDown[0], controlPhone.positionDown[1], 100, 100);
		ctx.drawImage(leftImage, controlPhone.positionLeft[0], controlPhone.positionLeft[1], 100, 100);
		ctx.drawImage(rightImage, controlPhone.positionRight[0], controlPhone.positionRight[1], 100, 100);
		ctx.drawImage(changeImage,controlPhone.positionChange[0], controlPhone.positionChange[1], 100, 100);
		ctx.drawImage(weaponImage,controlPhone.positionShot[0], controlPhone.positionShot[1], 100, 100);
	}, 
}
if(game) alert ("управления");

