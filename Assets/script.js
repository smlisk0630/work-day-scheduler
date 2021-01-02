// 1. Display current day at top of app
    // Install Day.js library
    // Create date section
    // Create loop
    // Create timeblock section
    // Get timeblock element
    // Create new section and add date/time text content
    // Add new section and content to parent section
var businessHourList = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

$(document).ready(function() {
    // get jumbotron section
    var jumbotron = document.getElementsByClassName("jumbotron");
    // call day.js and format date as month-day-year
    var getDate = dayjs().format('MMMM DD, YYYY');
    //create new paragraph and add date to it
    var dateBlock = $("<p>" + getDate +  "</p>");
    // append new paragraph and date to jumbotron section
    $(jumbotron).append(dateBlock);

    // get time-block section
    var timeBlock = document.getElementById("#time-block");

    // loop through the business hours array and append to time-block section
    businessHourList.forEach(function(hour) {
        var newTimeBlock = $("<p>" + hour + "</p>");
        $("#time-block").append(newTimeBlock);
            // add event listener and append to time-block section
            $("#time-block").click(function(){
                var newEvent = $("<p>");
                newEvent.text(" ");
                newTimeBlock.append(newEvent);
            });
    });
});