var countDownTime_1 = 4;
var name_1 = "";
var minutes_1 = "";
var transition_1 = "";
var break_1;
var userInputTime = 2 * 60;
var userInputTimeElapsed = userInputTime--;
var userInputTimeProcess = userInputTime - ((userInputTimeElapsed/userInputTime *100));

var timer = new Timer();
var status = $("#timeTicker").attr("data-play-status");

//For progress bar calculation
/*var progressBarMinutes =timer.getTimeValues().minutes;
var progressBarSeconds =timer.getTimeValues().seconds;
var progressBarTotalSeconds =timer.getTimeValues().minutes * timer.getTimeValues().seconds;*/


window.onload = function(){
    runTimerSetUp();
    //activateTimerToPlayOrPause();


};

$("#bnt_SaveTimes").on('click',
    function()
    {
        console.log("You clicked the save button!!");
        //Assign the form values to variables.
        name_1 = $('#name_1').val();
        minutes_1 = $('#minutes_1').val();
        transition_1 = $('#transition_1').val();
        break_1 = $().val();
        $("#MainArea").html("");
        $('#exampleModal').modal('hide');//Close the modal.
        runTimerSetUp();
    }
)
//When the app first loads
function runTimerSetUp() {

    var currentTime = moment().format('MMMM DD, YYYY, h:mm a');
    //Top information
    //$("#TimerTitle").html("<h1>Today's Schedule</h1>");
    $("#CurentTime").html(currentTime);

    //Timer #1
        //Timer graphics
        $("#playButton").html("<img src='play.png' >");
        //$("#playButton").on("click", activateTimerToPlayOrPause);
        /*$('#pb').html('<div class="pbBottom"> <div id="pbWidth"class="pbTop"></div></div>');

        //Timer #1 information (grab info from modal)
        $('#TimerInfo').html($('#name_1').val());
        $('#timeTicker').text(minutes_1 +':00');*/
    //Timer #2
    //Timer #3

    // <div class="progress">
    //     <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div>
};

//Play or pause button is clicked.
$('#playButton').click(function () {
    checkPlayStatus();
});

//Checks the status of the data-play-status attribute.
function checkPlayStatus(){
//For progress bar calculation

    switch (status){
        //Status: idle, playing, paused

        //turn to 'playing'
        case 'idle':
            $("#playButton").html("<img src='pause.png' >");
            timer.start({countdown: true, startValues: {seconds: userInputTime}, callback: function (timer) {
                $('#timeTicker').html(
                    timer.getTimeValues().toString(['minutes', 'seconds', ])
                );
            }});
            //Get the seconds to calculate the progress bar width.
            timer.addEventListener('secondsUpdated', function (e) {
                $('#chronoExample .values').html(timer.getTimeValues().toString());
                //console.log("Total seconds: " , userInputTime--);
                console.log("Total seconds: " , userInputTimeProcess);

            });
            status ="playing";
            console.log("The play status is: " +status);
        break;

        //turn to 'pause'
        case 'playing':
            $("#playButton").html("<img src='play.png' >");
            timer.pause();
            status = "paused";
            console.log("The play status is: " +status);
         break;

        //turn to 'playing'
        case 'paused':
            $("#playButton").html("<img src='pause.png' >");
            timer.start();
            status = "playing";
            console.log("The play status is: " +status);
        break;
    }
}


function activateTimerToPlayOrPause() {
//Starts the timer
 /*   $('#playButton').click(function () {
        timer.start();
        console.log("you clicked the play pause button.");
        //timer.start({countdown: true, startValues: {seconds: userInputTime}});
        //console.log($("#timeTicker").attr("data-play-status"));
    });*/

  /*--------------------------- Original Code -------------------------------------*/
    $('#chronoExample .pauseButton').click(function () {
     timer.pause();
     });

     $('#chronoExample .stopButton').click(function () {
     timer.stop();
     });

     $('#chronoExample .resetButton').click(function () {
     timer.reset();
     });

     /*timer.addEventListener('secondsUpdated', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });*/

     timer.addEventListener('started', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });

     timer.addEventListener('reset', function (e) {
     $('#chronoExample .values').html(timer.getTimeValues().toString());
     });

     //What happens when the event is complete?
     timer.addEventListener('targetAchieved', function (e) {
     console.log("THE EVENT IS COMPLETE!!!!!!!");
     /*--------------------------- Original Code -------------------------------------*/
     });
}//end start


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


