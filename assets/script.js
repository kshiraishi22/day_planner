$(document).ready(function() {
  // Define variables
    var currentDayELEM = $("#currentDay");
    var scheduleELEM = $("#schedule");
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
        // Controls Color Styling 
        if (now.isSame(thisHours, 'hour')) {
          timeClass = "present";
        } else if (now.isAfter(thisHours)) {
          timeClass = "past";
        } else if (now.isBefore(thisHours)) {
          timeClass = "future";
        }
        
        var hourTXT = moment().hour(hour).format("h a");
        var hourID = moment().hour(hour).format("h");
        var event = schedule[hourTXT];
        var parent = $("<div class='row time-block'>");
        
        // *** ADDED AN ID TO THE PARENT DIV *** 
        parent.attr("id", hourID);
        var timeCOL = $("<div class='hour col-1'>").text(hourTXT);
        var textCOL = $("<textarea class='description col-10'>").addClass(timeClass).text(event);
        textCOL.attr("data-attribute", i);
        var saveBtn = $("<button class='saveBtn col-1'>").text("Save");
        parent.append(timeCOL, textCOL, saveBtn);
        scheduleELEM.append(parent);
      }
      var saveBtnClick = $(".saveBtn");
      var textInput = $("data-attribute").val();

    $(saveBtnClick).on("click", function() {
      // we need to grab the specific save button associated with the proper 'data-attribute' hour <textarea> element
      // console.log($(this).siblings()[1].val());
      let itemVal = $(this).siblings(".description").val().trim();
      // let itemVal = $(this).siblings(".description").data("attribute");
      console.log(itemVal);
      // We grab the value the user put into the textarea and use that hour data-attribute as the 'key' to put in local storage
      let itemKey = $(this).siblings(".hour").text();
      // let itemKey = $(this).siblings(".description").data("attribute");
      console.log(itemKey);
      // We store the new data into the local storage object
      JSON.stringify(localStorage.setItem(itemKey, itemVal));
    });
    // *** ON LOAD *** we need to grab each hour 'key' from localStorage and populate each textarea field accordingly.
    $("#9 .description").val(localStorage.getItem("9 am"));
    $("#10 .description").val(localStorage.getItem("10 am"));
    $("#11 .description").val(localStorage.getItem("11 am"));
    $("#12 .description").val(localStorage.getItem("12 mm"));
    $("#1 .description").val(localStorage.getItem("1 pm"));
    $("#2 .description").val(localStorage.getItem("2 pm"));
    $("#3 .description").val(localStorage.getItem("3 pm"));
    $("#4 .description").val(localStorage.getItem("4 pm"));
    $("#5 .description").val(localStorage.getItem("5 pm"));
  });