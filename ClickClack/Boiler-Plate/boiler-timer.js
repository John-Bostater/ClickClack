/*  
    MAKE A NEW .JS FOR CLICK CLACK CALLED:  "TimerLib.js"
    THIS SCRIPT NEEDS TO HAVE 'defer' at the END OF IT!

    This file will also have the action-event handling for the dropdown menu 
    for changing the timer!!!

    //

*/

//TRY THIS OUT!!
//import { setText } from './boiler'


//Global variables btw!!
const textArea = document.getElementById('textArea');

const timerDisplay = document.getElementById('timer');
let timer;
let isTimerRunning = false;
let countdown = 10; // seconds

  //Set the text of the text area ()
    textArea.textContent = "Hello There Match This All";


  //Add the text to match to the textarea
    const textMatch = textArea.textContent;

      //Test!!/DEbug
        textArea.value = textMatch;


        function updateTimerDisplay() {
            timerDisplay.textContent = `Time Left: ${countdown}`;
        }

        function startTimer() {

          //Do not start another timer if one is already running, or no user input
            if(isTimerRunning){
                return;
            }

          //Set the timer flag
            isTimerRunning = true;
            
            updateTimerDisplay();

            timer = setInterval(() => {

                if (countdown <= 0) {
                    clearInterval(timer);
                    textArea.disabled = true;
                    isTimerRunning = false;
                    countdown = 10; // Reset countdown for future use
                    updateTimerDisplay();
                } else {
                    countdown--;
                    updateTimerDisplay();
                }
            }, 1000);
        }

 //Reset the Timer
    function resetTimer(){
        clearInterval(timer);


        //Set the countdown timer
        countdown = 10; // Reset countdown to initial value
        isTimerRunning = false;
        textArea.disabled = false;
        textArea.value = 'Hello There Match This All '; // Here you would re-randomize the text
        updateTimerDisplay();
    }

//        textArea.addEventListener('focus', () => {
            //Reset the timer upon refocus
  //          if(!isTimerRunning){
              //
    //            resetTimer();
      //      }        
        //});

  //Place the user's cursor at the beginning of the textArea
    textArea.addEventListener('click', () => {
        //Randomly generate the text
          setText();

        //place the cursor to the beginning?    
            textArea.selectionStart = 0;
            textArea.selectionEnd = 0;       
    });



  //Make sure the user CANNOT select the rest of the text
    textArea.addEventListener('select', () => {
      //place the cursor to the beginning?    
        textArea.selectionStart = 0;
        textArea.selectionEnd = 0;       
    });


  //Start the timer upon user input (if it has not been started already)
    textArea.addEventListener('input', () => {
        if (!isTimerRunning) {
            startTimer();
        }
    });


  //Allow refocusing by handling blur event
    textArea.addEventListener('blur', () => {
        if (textArea.disabled) {
            textArea.disabled = false;
            resetTimer();
        }
    });