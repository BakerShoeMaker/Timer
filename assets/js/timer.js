var countDownTime = 5;
var display = $('#timeTicker');

$("#bnt_CreateTimer").on("click",

    function()
    {
        $("#MainArea").html("");
        runTimerSetUp();
        startTimer(countDownTime, display); //should work on click only.
    }

)//end CreateButtonTimer


//******************* START ************************

function pauseTime(){

}

function resumeTime() {

}

//******************* PAUSE/RESUME ******************


function runTimerSetUp() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#TimerTitle").html("<h1>Today's Schedule</h1>");
    $("#CurentTime").html(currentTime);
    $("#TimerInfo").html("Session 1");
    $("#playPause").html("<img src='pause.png' >");
    $("#timeTicker").html('<p>00:00</p>');
    $("#ProgressBar").html('<div class="progress">' + '<div class="progress-bar bg-success" role="progressbar"' +
        ' style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'+
        '</div>');
    $("#playPause").on("click", startTimer);

    // <div class="progress">
    //     <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div>


};

console.log($("#pb").attr("data-status"));

//Starts the timer
function startTimer(duration, display) {
    //https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer()
    {
        // get the number of seconds that have passed since startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.html("<p>"+minutes + ":" +seconds +"</p>");

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration example 05:00 not 04:59
            start = Date.now() + 1000;
        }
        if(minutes == 0 && seconds == 0){
            console.log("Times up!");
            //Stop the timer and start the next timer (if it is available).
        }

        //update progress bar width
        //$(ProgressBar).attr('w', 'w-'+((countDownTime - diff/countDownTime)*100));

        console.log(countDownTime - diff);
        console.log( $(ProgressBar).attr('w').val());

    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}









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