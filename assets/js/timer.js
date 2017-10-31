var countDownTime_1 = 5;
var name_1 = "";
var minutes_1 = "";
var transition_1 = "";
var break_1;


$("#bnt_SaveTimes").on('click',
    function()
    {
        console.log("You clicked the save button!!");
        //Assign the form values to variables.
        //name_1 = $('#name_1').val();
        //minutes_1 = $('#minutes_1').val();


        $("#MainArea").html("");
        //runTimerSetUp();
        $('#exampleModal').modal('hide');//Close the modal.
        //startTimer(); //should work on click only.
    }
)

function runTimerSetUp() {

    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    //Top information
    //$("#TimerTitle").html("<h1>Today's Schedule</h1>");
    //$("#CurentTime").html(currentTime);

    //Timer #1
        //Timer graphics
        //$("#playPause").html("<img src='pause.png' >");
        //$("#playPause").on("click", startTimer);
        //$('#pb').html('<div class="pbBottom"> <div id="pbWidth"class="pbTop"></div></div>');

        //Timer #1 information (grab info from modal)
        //$('#TimerInfo').html($('#name_1').val());
        //$('#timeTicker').html($('#name_1').val());



    //Timer #2


    //Timer #3



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