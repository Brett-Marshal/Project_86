canvas = new fabric.Canvas('myCanvas');
x = document.getElementById("myAudio");

bday_img = "BirthdayImage.jpg"
block_image_object = ""

function new_image()
{
	fabric.Image.fromURL(bday_img,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    })
}

function playSound()
{
	x.play();
}
