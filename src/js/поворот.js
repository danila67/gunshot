
function drawImageRot(img,x,y,width,height,deg){
    // Store the current context state (i.e. rotation, translation etc..)
    ctx.save()

    //Convert degrees to radian 
    var rad = deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    // Restore canvas state as saved from above
    ctx.restore();
}
	canvas.addEventListener('mousedown', function(e) {
const x = e.clientX;
    const y = e.clientY;
 angle = Math.atan2(x - xCentral, - (y - yCentral) )*(180/Math.PI);      
});
	drawImageRot(image,xPosition,yPosition,width,height,angle);