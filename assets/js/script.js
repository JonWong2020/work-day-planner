// Selectors

var saveBtn = $(".saveBtn");

// Moment.js function to display calendar with date (Month, day, year, dayof) and time

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// function to display the color background depending on past, present, or future

function textBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        // console.log(this);

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Save information to local storage

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
    // console.log(this);
});

// Function to have info pull after page refresh

function showPlan() {

    $(".hour").each(function() {
        var presentHour = $(this).text();
        var presentPlan = localStorage.getItem(presentHour);

        // console.log(this);
        // console.log(presentHour);

        if (presentPlan !== null) {
            $(this).siblings(".plan").val(presentPlan);
        }
    });
}

// Call functions

textBlockColor();
showPlan();