var countDownTime_1 = 5;
var name_1 = "";
var minutes_1 = "";
var transition_1 = "";
var break_1;
var userInputTime = minutes_1 * 60;
var timer = new Timer();
var status = $("#timeTicker").attr("data-play-status");


window.onload = function(){
    runTimerSetUp();
    startTimer();


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

//Start the timer when play button is clicked.
/*$('#playPause').on('click', function(){
    console.log("You clicked the play/pause button.");
    //startTimer();
});*/


function runTimerSetUp() {

    var currentTime = moment().format('MMMM DD, YYYY, h:mm a');
    //Top information
    //$("#TimerTitle").html("<h1>Today's Schedule</h1>");
    $("#CurentTime").html(currentTime);

    //Timer #1
        //Timer graphics
        $("#playPause").html("<img src='play.png' >");
        $("#playPause").on("click", startTimer);
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


function checkPlayStatus(){

    switch (status){
        //Status: idle, playing, paused

        //turn to 'playing'
        case 'idle':
            $("#playPause").html("<img src='pause.png' >");

            console.log("The play status is: " +status);
        break;

        //turn to 'pause'
        case 'playing':
            $("#playPause").html("<img src='pause.png' >");
            status = "paused";
            console.log("The play status is: " +status);
         break;

        //turn to 'playing'
        case 'paused':
            $("#playPause").html("<img src='play.png' >");
            status = "playing";
            console.log("The play status is: " +status);
        break;
    }
}

function startTimer() {
//Starts the timer
    $('#playPause').click(function () {
        if(status == "idle"){
            timer.start();
            checkPlayStatus();
        }
        if(status == "playing"){
            timer.pause();
            checkPlayStatus();
        }

        if(status == "paused"){
            timer.start();
            checkPlayStatus();
        }


        //timer.start({countdown: true, startValues: {seconds: userInputTime}});

        //console.log($("#timeTicker").attr("data-play-status"));
    });
    timer.addEventListener('secondsUpdated', function (e) {
        $('#timeTicker').html(timer.getTimeValues().toString());
    });

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


