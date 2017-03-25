//Implement the red light using jQuery. Don't forget to add the script tags.

function red() {
    $("#stopLight.bulb").css("backgroundColor", "red");
}

    $("#stopButton").click(red);

function yellow() {
    $("#slowLight.bulb").css("backgroundColor", "yellow");
}

    $("#slowButton").click(yellow);

function green() {
    $("#goLight").css("backgroundColor", "green");
}
    $("#goButton").click(green);