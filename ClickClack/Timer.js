/*
[Author]: John Bostater

[Project Start Date]: 5/11/24

[Description]:
  This file contains the relevant script for setting up the countdown timer
  and calculating the wpm count.
*/


//Global variables
//--------------------------------------------------------------------
  //Get the text area element/text
    //const textBox = document.getElementById('textBox');

  //Timer element/text 
    const timerDisplay = document.getElementById('timer');
  
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
  //Add the text to match to the textBox
    const textMatch = textBox.textContent;

  //Set the value of the text area to the text we are trying to match
    textBox.value = textMatch;

  //Set the timer key and countdown to their default values
    //timerKey = textBox.value;

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
                textBox.disabled = true;

              //Set the flag to false (timer no longer running)
                isTimerRunning = false;
                         
              //Update the timer display
                updateTimerDisplay();

              //Reset the total word count back to 0, (new test started)
                totalWordCount = 0;

              //Reset the 'press any key to start a new test' flag
              //Set the flag back to false so the user cannot start a new test upon typing a new key
                testFlag = false; 

              //NEW!!!
               // fillPage();
               // clutterFlag = true;

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
        textBox.disabled = false;
      
      //Set the text area's text to default text
        textBox.value = 'Text Here...'; // Here you would re-randomize the text
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
           
          //Have a case for "customize timer!!"
          
        }
      //Switch case statement that will update the global variable 'countdown'
    }
//---------------------------------------------------------------------------------------- 



//Event-Listeners
//---------------------------------------------------------------------------------------- 
  //Start the timer upon user input (if it has not been started already)
    textBox.addEventListener('input', () => {
      //If the timer is not already running, run it
        if(!isTimerRunning){
          //Start the Timer
            startTimer();
        }
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
     // const totalWordCount = document.getElementById('totalWords');

    //If the user has correctly matched all of the text add one more word!
      if(textBox.textContent == 'All text correctly matched!'){
        //Increment total Word count ++
          alert('Debug #1!');
      }

    //Update the total wpm!
      wpmDisplay.textContent = ((totalWordCount / setTimer(timerDropDown.value)) * 60);
  }
//---------------------------------------------------------------------------------------- 