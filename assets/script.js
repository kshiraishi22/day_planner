$(document).ready(function() {

// Define variables
var currentDayELEM = $("#currentDay");
var scheduleELEM = $("#schedule");
var schedule = {
  '10 am': 'Walk the dog',
  '3 pm': 'Get groceries'
}

// hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Time Display
setInterval(function () {
  currentDayELEM.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1 * 1000);

// Loop for creating rows
for (var i = 9; i <= 17; i++) {
  makeRow(i)
}

// Function for creating rows with time, textbox and save button from 9am to 5pm and color coding based on time
  function makeRow(hour) {
    var now = moment();
    var thisHours = moment(hour, "H");
    var timeClass = "";

    if (now.isSame(thisHours, 'hour')) {
      timeClass = "present";
    } else if (now.isAfter(thisHours)) {
      timeClass = "past";
    } else if (now.isBefore(thisHours)) {
      timeClass = "future";
    }

    var hourTXT = moment().hour(hour).format("h a");
    var event = schedule[hourTXT];

    var parent = $("<div class='row time-block'>");
    var timeCOL = $("<div class='hour col-1'>").text(hourTXT);
    var textCOL = $("<textarea class='description col-10'>").addClass(timeClass).text(event);
    var saveBtn = $("<button class='saveBtn col-1'>").text("Save");

    parent.append(timeCOL, textCOL, saveBtn);
    scheduleELEM.append(parent);
  }
console.log(saveBtn);
  // $(saveBtn).on("click", function() {

// Comment out to make the code more readable (html/css/js)

// ReadMe file

    
  
});
