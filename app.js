
$('body').on('click', function() {
    var x = event.clientX + "px";
    var y = event.clientY + "px";
    console.log("X: " + x + "&" + "Y: " + y);
    var randoAnimal = Math.floor(Math.random()*5);
    //console.log(randoAnimal);
    placeAnimal(x,y,randoAnimal);
    document.getElementById("falcon").style.top = y;
    document.getElementById("falcon").style.left = x;
});

function placeAnimal(x,y,randoAnimal) {

}

var falcons = 0;
var sparrows = 0;
var pigs = 0;
var unicorns = 0;
var hippos = 0;

// var animals = ["falcon","sparrpw","pig","unicorn","hippo"];

var animals = [];

function FarmAnimal(name, image, sound, x, y) {
	this.name = name;
	this.image = image;
	this.talk = function() {
		alert(sound);
	}
	type = "animal";
}

//var sparrow = new FarmAnimal("sparrow","http://pm1.narvii.com/6387/fd94cb88fa3f4008997a6074167122810f4330a0_128.jpg","twitter twitter");

//var pig = new FarmAnimal("pig","http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/pig-face.png","oink oink");

//var unicorn = new FarmAnimal("unicorn","https://a.ppy.sh/3610482_1452346309.png","friendship is magic");

///var hippo = new FarmAnimal("hippo","https://at-cdn-s01.audiotool.com/2011/05/15/documents/yQKhubIcrklLfmA0l04Ct3xKz2hvASQ0/0/cover256x256-e15b699236554e6389799c858b33932d.jpg","death");

var falcon = new FarmAnimal("falcon","http://www.ikalta.com/ga/farm/images/falcon.gif","screeech");

var $newAnimal = $("<span id='" + falcon.name + "' class='animal'><img src='" + falcon.image + "'></span>");

animals.push($newAnimal);

//falcon.talk();

$(document).ready(function () {
	$("#falcon").click(function() {
		falcon.talk()
	})
});

$(".container-farm").append(animals[0]);

//document.getElementById("falcon").style.top = "100px";

/*
$('#falcon').on('click', function() {
    alert(falcon.talk);
});
*/

/*
function Vehicle(color) {
  this.color = color;
}

function HybridCar(color) {
  Vehicle.call(this, color);
}

HybridCar.prototype = new Vehicle();

var prius = new HybridCar('white');

prius.color // "white"
*/