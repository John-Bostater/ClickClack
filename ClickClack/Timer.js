/*
[Author]: John Bostater

[Project Start Date]: 5/11/24

[Description]:
  This file contains: 
    [Timer] 
    
    [Random Text]
    
    [DropDown Menu for setting timer]

*/


//Global variables
//--------------------------------------------------------------------
  //Get the text area element/text
    const textArea = document.getElementById('textBox');

  //Timer element/text 
    const timerDisplay = document.getElementById('timer');
  
  //Select Timer DropDown menu element
    const timerDropDown = document.getElementById('userTimer');

  //Timer, [setIncrement()]
    let timer;

  //Key for selecting the time of the timer (via: DropDown)
    let timerKey = 0; 
      //0 is default {30 seconds}

  //Timer Flag
    let isTimerRunning = false;
  
  //CountDown Timer
    let countdown; /*= 30;*/   //10 SECONDS FOR DEBUG!!!
      //Set to default, 10 seconds

  //Save the randomly generated text to a variable for WPM calculation
    let testText;

  //Save the previous total words for updating the wpm
    let prevTotalWords = 0;
//--------------------------------------------------------------------

  

//Constructor
//--------------------------------------------------------------------
  //Add the text to match to the textarea
    const textMatch = textArea.textContent;

  //Set the value of the text area to the text we are trying to match
    textArea.value = textMatch;

  //Set the timer key and countdown to their default values
    //timerKey = textArea.value;

  //Default time (30 seconds)
    countdown = 30;
    
    //DEBUG ZONE (Excuted upon loading of the document)
//--------------------------------------------------------------------



//Timer Functionality
//---------------------------------------------------------------------------------------- 
  //Update the timer display
    function updateTimerDisplay() {
      //Set the timer display's time
        timerDisplay.textContent = countdown;
    }


  //Start the timer
    function startTimer() { 
      //Do not start another timer if one is already running, or no user input
      //If the timer is set to 'Infinite' just return here so the timer never starts  
        if(isTimerRunning || countdown == 'Infinite'){
            return;
        }

      //Set the timer flag
        isTimerRunning = true;
        
      //Update the timer
        updateTimerDisplay();
        
      //Start the time, (1000) millisecond intervals [1 second]
        timer = setInterval(() => {
          //Calculate the wpm! (updates wpm count & internal timer function needs)
            calculateWpm();    

          //Stop the timer once the countdown hits zero
            if(countdown <= 0){
              //Clear the interval
                clearInterval(timer);
              
              //Temporarily disable the text Area
                textArea.disabled = true;

              //Set the flag to false (timer no longer running)
                isTimerRunning = false;
                         
              //Update the timer display
                updateTimerDisplay();

              //Reset the total word count back to 0, (new test started)
                const totalWords = document.getElementById('totalWords');
                totalWords.textContent = 0;
            } 
          //Else, decrement the timer
            else{
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
        countdown = setTimer(timerDropDown.value);

      //Update the countdown timer display
        timerDisplay.textContent = countdown;

      //Flag signifying timer is NOT running
        isTimerRunning = false;
      
      //Re-enable the text area
        textArea.disabled = false;
      
      //Set the text area's text to default text
        textArea.value = 'Text Here...'; // Here you would re-randomize the text
        updateTimerDisplay();
    }


  //Set the timer value via timer key as input parameter
    function setTimer(userTimerKey){
      //Get the value as an int (makes switch-case faster)
        userTimerKey = parseInt(userTimerKey, 10)

      //Switch case for setting up the timer
      //Set the count down value and the timer display
        switch(userTimerKey){
          //30 Seconds
            case 0:
              return 30;
           
          
          //60 Seconds  {1 minute}
            case 1:
                return 60;
           

          //90 Seconds {1 minute, 30 seconds}
            case 2:
                return 90;
           

          //Infinite
            case 3:
                return 'Infinite';
           
        
          //DELETE WHEN DONE!!
          //DEBUG!!!!
            case 4:
                return 5;
           

          //Have a default statement that will switch the user's 

        }
      //Switch case statement that will update the global variable 'countdown'
    }
//---------------------------------------------------------------------------------------- 



//Event-Listeners
//---------------------------------------------------------------------------------------- 
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
      //If the text area is disable, re-enable it  
      if(textArea.disabled){
          //Re-enable the text box
            textArea.disabled = false;   
            
          //Reset the total word count
            const totalWordCount = document.getElementById('totalWords');
          //Set the total words to 0
            totalWordCount.textContent = '0';

          //Reset the timer
            resetTimer();
        }
    });


  //Event listeners for the dropdown menu for changing the Timer
    timerDropDown.addEventListener('click', () =>{
      //Update the timer upon every user interaction with the dropDown menu
      //[Default drop down value is: 0]

      //If the timer is in-progress, reset it!!
        if(isTimerRunning){
          resetTimer();
        }

      //Get the key of the selected time
        timerKey = timerDropDown.value;

      //Set the timer's display
        timerDisplay.textContent = setTimer(timerKey);
    
      //Set the timer
        countdown = setTimer(timerKey);
    });
//---------------------------------------------------------------------------------------- 



//Words per minute calculation
//---------------------------------------------------------------------------------------- 
  //Calculate the total WPM and display it!
  function calculateWpm(){
    //NEW IDEA!!
    //If user has 'Infinite' just simply display the total words??
  
    //Timer element as a const
      const wpmDisplay = document.getElementById('wpmDisplay');
    
    //Total Word Count (via: transparent id)
      const totalWordCount = document.getElementById('totalWords');

    //If the user has correctly matched all of the text add one more word!
      if(textArea.textContent == 'All text correctly matched!'){
        //Increment total Word count ++
          alert('Debug #1!');
      }

    //Update the total wpm!
      wpmDisplay.textContent = ((totalWordCount.textContent / setTimer(timerDropDown.value)) * 60);
  }
//---------------------------------------------------------------------------------------- 