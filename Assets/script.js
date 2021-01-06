function time() {

// format time to display hour using dayjs library
var businessHour = dayjs().hour();



$(document).ready(function() {
    // get jumbotron section
    var jumbotron = document.getElementsByClassName("jumbotron");
    // call current date/time and format as month-day-year
    var getDate = dayjs().format("MMMM DD, YYYY");
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

        })

        // create and append save button
        var saveButton = $("<button>");
        $(saveButton).addClass("saveBtn far fa-save");
        $(".row").append(saveButton);
        console.log(saveButton);
        // add event listener to save button and save to local storage
        $(".row").each(function() {
            $(".saveBtn").click(function() { var input = $("input").val();
                localStorage.setItem("input", JSON.stringify(input));
            })
        })
    })
}

time();