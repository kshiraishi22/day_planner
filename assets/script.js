// Define variables

var nineAm = document.querySelector("#nineAm");
var tenAm = document.querySelector("#tenAm");
var elevenAm = document.querySelector("#elevenAm");
var twelvePm = document.querySelector("#twelvePm")
var onePm = document.querySelector("#onePm");
var twoPm = document.querySelector("#twoPm");
var threePm = document.querySelector("#threePm");
var fourPm = document.querySelector("#fourPm");
var fivePm = document.querySelector("#fivePm");


var formInput_9 = document.querySelector(".formInput_9");  


// current time and date
$(document).ready(function() {
  var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  var displayCurrentTime = $(".time-date").text(currentTime);
  $(".time-date").css("text-align","center");

// create an EventListener for the save buttons
// link save button to local storage

  renderLastRegistered();

  function renderLastRegistered() {
    for (i = 9; i < 17; i++) {
      var saveForm_i = localStorage.getItem("saveForm_" + i);
      $(".formInput_" + i).val(saveForm_i);
      
      $(".btn" + i).click(function(e) {
        e.preventDefault();
        var saveForm_i = $(".formInput_" + i).val();
        localStorage.setItem("saveForm_" + i, saveForm_i);

      });
    };
  }
});




// Choose colors and color code the individual hrs (how to color the text area)

// Create a if/then statement for the past/present/future hours to determine color

// Align the text box where the hours are located 

// Comment out to make the code more readable (html/css/js)

// ReadMe file

// Bonus: have a live time display with seconds ticking at the top

