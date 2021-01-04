function time() {

var businessDate = new Date();

// 
var businessHour = dayjs().hour();
console.log(businessHour);


$(document).ready(function() {
    // get jumbotron section
    var jumbotron = document.getElementsByClassName("jumbotron");
    // call current date/time and format as month-day-year
    var getDate = dayjs().format('MMMM DD, YYYY');
    //create new paragraph and add date to it
    var dateBlock = $("<p>" + getDate +  "</p>");
    // append new paragraph and date to jumbotron section
    $(jumbotron).append(dateBlock);

        // change colors based on current time
        $(".row input").each(function()  {
            // add data-time attribute and convert to hour format using dayjs
            // convert string to number
            var currentTime = parseInt($(this).attr("data-time"));
            // change colors based on currentTime
            if(currentTime < businessHour) {
                $(this).parent().addClass("past");
            } else if(currentTime === businessHour) {
                $(this).parent().addClass("present");
            } else {
                $(this).parent().addClass("future");
            }
            console.log(currentTime);
        })
    })
}

time();