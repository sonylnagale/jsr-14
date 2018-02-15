
$('body').on('click', function() {
    var x = event.clientX + "px";
    var y = event.clientY + "px";
    console.log("X: " + x + "&" + "Y: " + y);
    $("#" + currentAnimal).css({"top":y,"left":x});
});


function FarmAnimal(name, image, sound, x, y) {
	this.name = name;
	this.image = image;
	this.talk = function() {
		alert(sound);
	}
	type = "animal";
}

var animalOptions = [];

var sparrow = new FarmAnimal("sparrow","http://www.ikalta.com/ga/farm/images/sparrow.gif","twitter twitter");
animalOptions.push(sparrow);

var pig = new FarmAnimal("pig","http://www.ikalta.com/ga/farm/images/pig.gif","oink oink");
animalOptions.push(pig);

var unicorn = new FarmAnimal("unicorn","http://www.ikalta.com/ga/farm/images/unicorn.gif","friendship is magic");
animalOptions.push(unicorn);

var hippo = new FarmAnimal("hippo","http://www.ikalta.com/ga/farm/images/hippo.gif","death");
animalOptions.push(hippo);

var falcon = new FarmAnimal("falcon","http://www.ikalta.com/ga/farm/images/falcon.gif","screeech");
animalOptions.push(falcon);

 
$(document).ready(function () {
	$(".animal").click(function() {
		animal = $(".animal").attr("id");
		console.log(animal);
		eval(animal).talk()
	})
});

$("#new").click(function() {
	newAnimal();
});

animalNumber = 0;
var currentAnimal = "";

function newAnimal() {
	var randoAnimal = Math.floor(Math.random()*5);
	//var animal = animalOptions[randoAnimal];
	var animal = animalOptions[randoAnimal];
	console.log(animal.name);
	var $newAnimal = $("<span id='" + animal.name + animalNumber + "' name='" + animal.name + "' class='animal'><img src='" + animal.image + "'></span>");
	currentAnimal = animal.name+animalNumber;
	animalNumber += 1;
	$(".container-farm").append($newAnimal);
}