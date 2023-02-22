var canvas=fabric.canvas('myCanvas');
var ball_y=0;
var ball_x=0;
var hole_y=400;
var hole_x=800;
var hole_obj;
var ball_obj;
var block_image_width = 5;
var block_image_height = 5;
function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(img)  {
		hole_obj= img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	newImage();
}

function newImage(){
	fabric.Image.fromURL("ball.png", function(img)  {
		ball_obj= img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="VOÇÊ ATINGIU O OBJETIVO!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			newImage()
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
			newImage()
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
			newImage()
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			newImage()
		}
	}
	
	function up()
	{
		if(ball_y >=0)
		{
			ball_y=ball_y-block_image_height;
			console.log("Altura da imagem do bloco t="+block_image_height);
			console.log("Quando a tecla cima é pressionada, X="+ball_x+" , y = "+ball_y);
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function down()
	{
		if(ball_y<=450)
		{
			ball_y=ball_y+block_image_height;
			console.log("Altura da imagem do bloco t="+block_image_height);
			console.log("Quando a tecla baixo é pressionada, X="+ball_x+" , y = "+ball_y);
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function left()
	{
		if(ball_x >=5)
		{
			ball_x=ball_x-block_image_width;
			console.log("largura da imagem do bloco t="+block_image_width);
			console.log("Quando a tecla esquerda é pressionada, X="+ball_x+" , y = "+ball_y);
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
			console.log("largura da imagem do bloco t="+block_image_width);
			console.log("Quando a tecla esquerda é pressionada, X="+ball_x+" , y = "+ball_y);
			canvas.remove(ball_obj);
			newImage();
		}
	}
	
}

