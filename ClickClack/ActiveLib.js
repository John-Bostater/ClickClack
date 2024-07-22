
//[DEFER FILE]
/*
[Author]: John Bostater

[Start Date]: 7/17/24

[Description]:
  This file contains: 
    [Timer] 
    
    [Random Text]
    
    [DropDown Menu for setting timer]

*/


//TRY THIS OUT!!
//import { setText } from './Random.js';


//Global variables
//----------------------------------------
  //Get the text area element/text
    const textArea = document.getElementById('textBox');

  //Timer element/text 
    const timerDisplay = document.getElementById('timer');
  
  //Timer
    let timer;

  //Timer Flag
    let isTimerRunning = false;
  
  //CountDown Timer
    let countdown = 10;   //10 SECONDS FOR DEBUG!!!
      //Set to default, 10 seconds

  //Save the randomly generated text to a variable for WPM calculation
    let testText;
//----------------------------------------
  

//Constructor
//---------------------------------------------------------------------------------------- 
//Add the text to match to the textarea
  const textMatch = textArea.textContent;

//Set the value of the text area to the text we are trying to match
  textArea.value = textMatch;
//---------------------------------------------------------------------------------------- 



//Timer Functionality
//---------------------------------------------------------------------------------------- 
  //Update the timer display
    function updateTimerDisplay() {
      //Set the timer display's time
        timerDisplay.textContent = `Time Left: ${countdown}`;
    }

  //Start the timer
    function startTimer() {
      //Do not start another timer if one is already running, or no user input
        if(isTimerRunning){
            return;
        }

      //Set the timer flag
        isTimerRunning = true;
        
        updateTimerDisplay();

      //Start the time, (1000) millisecond intervals [1 second]
        timer = setInterval(() => {
          //Stop the timer once the countdown hits zero
            if (countdown <= 0) {
              //Clear the interval
                clearInterval(timer);
              
              //Temporarily disable the text Area
                textArea.disabled = true;

              //Set the flag to false (timer no longer running)
                isTimerRunning = false;
              
              //Reset the countdown timer to the user's specifications
                countdown = 10; // Reset countdown for future use
                
              //Update the timer display
                updateTimerDisplay();

              //Call upon the WPM calculation!!
                //Compare: [textArea.value] with [testText]
                //Call upon the function for loading the 


            } 
          //Else, decrement the timer
            else {
              //decrement count down
                countdown--;
              //Update the timer's display
                updateTimerDisplay();
            }
        }, 1000);
    }


  //Reset the Timer
    function resetTimer(){
      //reset the timer object's interval
        clearInterval(timer);

      //Set the countdown timer
        countdown = 10; // Reset countdown to initial value
        isTimerRunning = false;
        textArea.disabled = false;
        textArea.value = 'Text Here...'; // Here you would re-randomize the text
        updateTimerDisplay();
    }
//---------------------------------------------------------------------------------------- 



//Event-Listeners
//---------------------------------------------------------------------------------------- 
  //Place the user's cursor at the beginning of the textArea
    textArea.addEventListener('click', () => {
      //Randomly generate the text
        setText();
      //Place the cursor back to the beginning of the text    
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
      //If the timer is not already running, run it
        if(!isTimerRunning){
          //Start the Timer
            startTimer();
        }
    });


  //Allow refocusing by handling blur event
    textArea.addEventListener('blur', () => {
      ///  
      if(textArea.disabled){
          //Re-enable the text box
            textArea.disabled = false;          
          //Reset the timer
            resetTimer();
        }
    });
//---------------------------------------------------------------------------------------- 



//Generate random text
//---------------------------------------------------------------------------------------- 
  //[Both: String eat & color eat]
  //Set up the typing test
    function setText(){   
      //If the timer is not already running, set the random text
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
//---------------------------------------------------------------------------------------- 