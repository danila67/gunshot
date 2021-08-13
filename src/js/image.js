const bottleImage = [new Image(),new Image(),  new Image(), new Image(),new Image(),  new Image()];

for(let i = 0; i < bottleImage.length; i++) {
bottleImage[i].src = "Animation/bottle/" +i +".png";
}

const playerImageRightRest = [new Image(),new Image(),  new Image(), new Image(),new Image(),  new Image(), new Image(),  new Image()];

for(let i = 0; i < playerImageRightRest.length; i++) {
playerImageRightRest[i].src = "Animation/Right/rest/" +i +".png";
}

const playerImageRightRun = [new Image(),new Image(),  new Image(), new Image(),new Image(),  new Image(), new Image(),  new Image()];

for(let i = 0; i < playerImageRightRun.length; i++) {
playerImageRightRun[i].src = "Animation/Right/run/" +i +".png";
}


const playerImageLeftRest = [new Image(),new Image(),  new Image(), new Image(),new Image(),  new Image(), new Image(),  new Image()];

for(let i = 0; i < playerImageLeftRest.length; i++) {
playerImageLeftRest[i].src = "Animation/Left/rest/" +i +".png";
}

const playerImageLeftRun = [new Image(),new Image(),  new Image(), new Image(),new Image(),  new Image(), new Image(),  new Image()];

for(let i = 0; i < playerImageLeftRun.length; i++) {
playerImageLeftRun[i].src = "Animation/Left/run/" +i +".png";
}

const upImage = new Image();
upImage.src = "texture/Control/up.png";

const downImage = new Image();
downImage.src = "texture/Control/down.png";

const leftImage = new Image();
leftImage.src = "texture/Control/left.png";

const rightImage = new Image();
rightImage.src = "texture/Control/right.png";

const changeImage = new Image();
changeImage.src = "texture/Control/change.png";

const bottleImage6 = new Image();
bottleImage6.src = "texture/0.png";

const bottleImage7 = new Image();
bottleImage7.src = "texture/1.png";

const bottleImage8 = new Image();
bottleImage8.src = "texture/2.png";

const weaponImage = new Image();
weaponImage.src = "texture/gun/weapon.png";

const weaponImageLeft= new Image();
weaponImageLeft.src = "texture/gun/weaponLeft.png";

const weaponImageRight = new Image();
weaponImageRight.src = "texture/gun/weaponRight.png";

const avroraImage = new Image();
avroraImage.src = "texture/gun/avrora.png";

const avroraImage2 = new Image();
avroraImage2.src = "texture/gun/avrora2.png";

const mp33Image2 = new Image();
mp33Image2.src = "texture/gun/mp33.png";

const mp33Image = new Image();
mp33Image.src = "texture/gun/2mp33.png";

const menuImage = new Image();
menuImage.src = "texture/menu/menu.png";

const menuOkImage = new Image();
menuOkImage.src = "texture/menu/menuOk.png";

if(game) alert("изображения");
