
//var canvas = new fabric.canvas('myCanvas');
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;
 
block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{

	fabric.Image.fromURL(get_image, function(Imag){
		block_image_object=Imag;
		block_image_object.scaleToWidth(block_image_width);
		//block_image_object.scaleHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
		});
		
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	
	keyPressed = e.keyCode;
console.log(keyPressed);
//window.addEventListener("keydown",myKeyDown);

	if(keyPressed == '82')
	{
		new_image('rr.jpg');
		console.log('r');
	}
	if(keyPressed == '71')
	{
		block_x = 260;
		block_y = -100;
		new_image('gr.png');
		console.log('g');
	}
	
	if(keyPressed == '89')
	{
		block_x =540;
		new_image('yr.png');
		console.log('y');
	}
	if(keyPressed == '80')
	{
		block_x = 750;
		new_image('pr.png');
		console.log('p');
	}
	if(keyPressed ==
		 '66')
	{
		block_x = 960;
		block_y = 200
		new_image('br.png');
		console.log('b');
	}
	
}

