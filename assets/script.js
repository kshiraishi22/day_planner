var nineAm = document.querySelector("nineAm");
var tenAm = document.querySelector("tenAm");
var elevenAm = document.querySelector("elevenAm");
var twelvePm = document.querySelector("twelvePm")
var onePm = document.querySelector("onePm");
var twoPm = document.querySelector("twoPm");
var threePm = document.querySelector("threePm");
var fourPm = document.querySelector("fourPm");
var fivePm = document.querySelector("fivePm");

$(document).ready(function() {
 var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
 var displayCurrentTime = $(".time-date").text(currentTime);
 $('.time-date').css('text-align','center');

});

