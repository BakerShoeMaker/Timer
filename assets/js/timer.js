var nameOfTimer_1 = "Timer 1";
var nameOfLesson_1 = "";
var name_1 = "";
var minutes_1 = 5;

var nameOfLesson_2 = "";
var name_2 = "";
var minutes_2 = "";

var nameOfLesson_3 = "";
var name_3 = "";
var minutes_3 = "";

var userCountDownTime =5;

var userInputTime = userCountDownTime * 60;
var userInputTimerForProgressBar = userCountDownTime * 60;
var timer = new Timer();
var status = $("#timeTicker").attr("data-play-status");
var widthOfProgressBar = $('#ProgressBarWidth').css('width');

var userInputTimeElapsed;
var progressBarWidthProcessed;

window.onload = function(){
    runTimerSetUp();
    //activateTimerToPlayOrPause();
    minutes_1 = userCountDownTime;
};

$("#bnt_SaveTimes").on('click',
    function()
    {
        console.log("You clicked the save button!!");
        //Fill in values for the first timer
        nameOfLesson_1 = $('#NameOfLesson_1').val();
        $('#NameOfTimerTitle_1').html(nameOfLesson_1);
        name_1 = $('#name_1').val();
        minutes_1 = $('#LessonMinutes_1').val();
        userCountDownTime = minutes_1;
        $('#timeTicker').html(+minutes_1 +':00');

        $("#MainArea").html("");

        $('#AddTimerModal').modal('hide');//Close the modal.
        console.log("Name of Timer: " +nameOfTimer_1);
        console.log("Name of Lesson: " +nameOfLesson_1);
        console.log("Minutes: " +minutes_1);
        console.log("user input time: " +userCountDownTime);

        //runTimerSetUp();
    }
)


//When the app first loads
function runTimerSetUp() {

    var currentTime = moment().format('MMMM DD, YYYY, h:mm a');
    //Top information
    $("#CurentTime").html(currentTime);


    //Add default time OR load default times from the database;
    $('#timeTicker').html('05:00');

    //Timer #1
        //Timer graphics
        $("#playButton").html("<img src='play.png' >");
        /*$('#pb').html('<div class="pbBottom"> <div id="pbWidth"class="pbTop"></div></div>');

        //Timer #1 information (grab info from modal)
        $('#TimerInfo').html($('#name_1').val());
        $('#timeTicker').text(minutes_1 +':00');*/
    //Timer #2
    //Timer #3

};

//Play or pause button is clicked.
$('#playButton').click(function () {
    checkPlayStatus();
});
//What happens when the event is complete?
timer.addEventListener('targetAchieved', function (e) {
    console.log("THE EVENT IS COMPLETE!!!!!!!");
    whenFinished();
});
function whenFinished(){
    status = "paused";
    checkPlayStatus();
    console.log(status);
};


//Checks the status of the data-play-status attribute.
function checkPlayStatus(){
//For progress bar calculation

    switch (status){
        //Status: idle, playing, paused

        //turn to 'playing'
        case 'idle':
            $("#playButton").html("<img src='pause.png' >");
            timer.start({countdown: true, startValues: {seconds: userCountDownTime *60}, callback: function (timer) {
                $('#timeTicker').html(
                    timer.getTimeValues().toString(['minutes', 'seconds', ])
                );
            }});
            //Get the seconds to calculate the progress bar width.
            timer.addEventListener('secondsUpdated', function (e) {
                $('#timeTicker').html(timer.getTimeValues().toString());
                userInputTimeElapsed = userInputTime--;
                progressBarWidthProcessed = 100 - (userInputTimeElapsed/userInputTimerForProgressBar *100);

                //Increase the width of the progress bar.
                widthOfProgressBar = (progressBarWidthProcessed) +'%';
                console.log(userInputTimeElapsed);
                /*console.log("Total seconds: " , progressBarWidthProcessed );*/
                console.log("Width of progress bar: " +widthOfProgressBar);
                console.log("---------------------------------");
                $('#ProgressBarWidth').css('width',widthOfProgressBar );
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


    /*--------------------------- Original Code -------------------------------------*/
}//end start


function progressBarWidth(){
    var widthPercentage = (((countDownTime-diff)/countDownTime)*100);
    var finalWidth= widthPercentage +"%";
    console.log("Progress Bar width: ", finalWidth);
    $("#pbWidth").css('width:', finalWidth);
}

//Problems
//Timer appears on the screen (name of timer, time, play/pause button, progress bar, count down time)
    //Only one timer can operate at a time.
    //When one timer ends the other timer will start.

// ADDING ANOTHER TIMER: User can add another timer
    //Click the add timer button.


