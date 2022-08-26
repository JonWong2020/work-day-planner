// Selectors

var saveBtn = $(".saveBtn");

// Moment.js function to display calendar with date (Month, day, year, dayof) and time

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function to display the color background depending on past, present, or future

function textBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        console.log(this);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Call functions

textBlockColor();