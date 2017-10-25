var countDownTime = 5;



/*$("#bnt_CreateTimer").on("click",

    function()
    {
        $("#MainArea").html("");
        runTimerSetUp();
        startTimer(); //should work on click only.
    }

)*///end CreateButtonTimer

$("#bnt_SaveTimes").on('click',

    function()
    {
        console.log("You clicked the save button!!");
        console.log($('#name_1').val());
        console.log($('#minutes_1').val());
        console.log($('#transition_1').val());
    }

)


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
    $("#timeTicker").html('<div></div>');
    $("#playPause").on("click", startTimer);
    $('#pb').html('<div class="pbBottom"> <div id="pbWidth"class="pbTop"></div></div>');
    // <div class="progress">
    //     <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div>
};

console.log($("#pb").attr("data-status"));

//Starts the timer
function startTimer() {
    /*var g = 45;
    var timer = new Timer();
    $('#chronoExample .startButton').click(function () {
        //timer.start();
        timer.start({countdown: true, startValues: {seconds: g}});
    });
    $('#chronoExample .pauseButton').click(function () {
        timer.pause();
    });
    $('#chronoExample .stopButton').click(function () {
        timer.stop();
    });
   /!* $('#chronoExample .resetButton').click(function () {
        timer.reset();
    });*!/
    timer.addEventListener('secondsUpdated', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('started', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
   /!* timer.addEventListener('reset', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });*!/

   //What happens when the event is complete?
   timer.addEventListener('targetAchieved', function (e) {
        console.log("THE EVENT IS COMPLETE!!!!!!!");
    });*/

}

function progressBarWidth(){
    var widthPercentage = (((countDownTime-diff)/countDownTime)*100);
    var finalWidth= widthPercentage +"%";
    console.log("Progress Bar width: ", finalWidth);
    $("#pbWidth").css('width:', finalWidth);
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