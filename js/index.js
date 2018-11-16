//Implement the red light using jQuery. Don't forget to add the script tags.
//Toggles red light
$("#stopButton").click(function() {
	$("#stopLight.bulb").toggleClass("bulb-red");
})

$("#slowButton").click(function() {
	$("#slowLight.bulb").toggleClass("bulb-yellow");
})

function green() {
    $("#goLight").css("backgroundColor", "green");
}
    $("#goButton").click(green);

function black() {
	
}   

// $(“#stopLight.bulb”).click(function() {
// $(this).toggleClass(.bulb)

// $(#stopButton”).click (red);