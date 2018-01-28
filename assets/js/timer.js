var countDownTime_1 = 5;
var name_1 = "";
var minutes_1 = "";

var timer = new Timer();

window.onload = function(){
    startTimer();
    console.log("timer loaded.");
};

function startTimer() {
//Starts the timer
    //$('#startButton').click(function () {
    $('#startTimer').click(function () {
        timer.start();
        //timer.start({countdown: true, startValues: {seconds: userInputTime}});
        console.log("You clicked the play/pause button.");
    });

    $('#chronoExample .pauseButton').click(function () {
     timer.pause();
     });

     $('#chronoExample .stopButton').click(function () {
     timer.stop();
     });

     $('#chronoExample .resetButton').click(function () {
     timer.reset();
     });

     timer.addEventListener('secondsUpdated', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });

     timer.addEventListener('started', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });

     timer.addEventListener('reset', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });

     //What happens when the event is complete?
     timer.addEventListener('targetAchieved', function (e) {
     console.log("THE EVENT IS COMPLETE!!!!!!!");
     });
}

//Problems
// How to make the timer stop when it's finished?
// How to update the width every second?
//***************** TIMER START ***********************

//***************** TIMER END ***********************


//ADD TIMER: user selects the 'add timer' button (modal popup?)
    //user adds name of timer (has a default name).
    // user selects from radio button (work time or break).
    //user selects time from (selection menu).
    //user can save the message.

//Timer appears on the screen (name of timer, time, play/pause button, progress bar, count down time)
    //User can start/stop timer.
    //Timer progress bar and timer will count down.
    //Only one timer can operate at a time.
    //When one timer ends the other timer will start.

// ADDING ANOTHER TIMER: User can add another timer
    //Click the add timer button.


