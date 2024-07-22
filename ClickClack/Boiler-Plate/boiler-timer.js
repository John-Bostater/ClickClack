//[DEFER FILE]
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

//NEW VARIABELE!!
  let testText = randomText();



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


//NEW!!
//Set up the typing test!
function setText(){   
  if(!isTimerRunning){
    //Set the random text
      textArea.value = randomText();

    //Save the random text to be compared to later!
      testText = textArea.value;

  
    //Place the user's cursor at the start of the text area/box
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
  }
}


//[Both: String Eat && Color Eat]
//Function that will update the text being written or "followed along"
function randomText(){
  //[How it works]:
  //  This will generate a random number that will be modulo by 256
  //  This will select one of the 255 cases corresponding to a word which will
  //  be added to the string we will be returning

  //Randomly generated String (Initialization)
    let randStr = '';

  //Increase the variability of randomness
    let variability = 10000000000000;


  //Produce 255 unique words for our string
    for(let i = 0; i < 255; i++){
      //Generate a new random number, modulo by 256 to produce # between 0 & 255
        let randNum = Math.floor(Math.random() * variability) % 256;    

      //Switch-case for using the random number to generate a new word
        switch(randNum){
          case 0:
            randStr += 'hello ';
            break;

          case 1:
            randStr += 'because ';
            break;

          case 2:
            randStr += 'there ';
            break;

          case 3:
            randStr += 'this ';
            break;
          
          case 4:
            randStr += 'system ';
            break;          

          case 5:
            randStr += 'relative ';
            break;          

          case 6:
            randStr += 'in ';
            break;          

          case 7:
            randStr += 'new ';
            break;          

          case 8:
            randStr += 'excellent ';
            break;          

          case 9:
            randStr += 'excellent ';
            break;

          case 10:
            randStr += 'hold ';
            break;

          case 11:
            randStr += 'print ';
            break;

          case 12:
            randStr += 'end ';
            break;

          case 13:
            randStr += 'about ';
            break;

        }
    }
  

  //Return the randomly generated string
    return randStr;
}