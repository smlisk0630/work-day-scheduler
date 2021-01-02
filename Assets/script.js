// 1. Display current day at top of app
    // Install Day.js library
    // Create date section
    // Create loop
    // Create timeblock section
    // Get timeblock element
    // Create new section and add date/time text content
    // Add new section and content to parent section


$(document).ready(function() {
    var jumbotron = document.getElementsByClassName("jumbotron");
    var getDate = dayjs().format('MMMM DD, YYYY');
    var dateBlock = $("<p>" + getDate +  "</p>");
    $(jumbotron).append(dateBlock);
    // var newTimeBlock = $("#time-block");
    // container.append(newTimeBlock);
});