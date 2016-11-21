//Wait for the HTML to be fully loaded before running any code

$(document).ready(function() {

    // alert("Hello World!");

    // set up the #say-hello button to listen for a click. Upon click, alert "Hello World!"
    $("#say-hello").on("click", function() {
        alert("Hello World!");
    });

    $("#change-background").on("click", function() {
        // Change the background color of #animated-div red
        $("#animated-div").css("background-color", "red");
    });

    $("#animate-div").on("click", function() {
        $("#animated-div").addClass("animate");
    });
    $("#change-html").on("click", function() {
        // Replace HTML inside of #animated-div upon click
        $("#animated-div").html("<h1>NEW HTML!</h1>");
    });
});
