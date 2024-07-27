/* 
[Author]: John Bostater

[Start Date]: 6/23/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 

[Functions]: 

*/


//Global variables!
//-----------------------------------------------------------
  //Used for calculating the WPM
    let totalWordCount = 0;

  //Text box element used for setting unique event-handler??
    const textBox = document.getElementById('textBox');

  //Drop Down Menu for test selection object
    const dropDown = document.getElementById('selectTestContent');

  //Select Timer DropDown menu element
    const timerDropDown = document.getElementById('userTimer');

  //Flag for the test to begin 
    let testFlag = true;

  //List of containers that will be removed upon focus of the text box
//-----------------------------------------------------------



//Button Action Event Handlers
//-----------------------------------------------------------------------------------------------------
  //Support Me! 
    //(load another page that had link to other websites and other info)


  //About the creator


  //Options/Settings
    //allow the user to change more features of the click click display/menu
    //This button will load a new html doc that allows the user to change the 
    //values of 'ActiveLib2.js' which will be another defer file in 'ClickClack.html' that will have 
    //action event-handlers set for all of the 'SettingsPage.html' for the user to change more features
    
    //The second defer file 'ActiveLib2.js' will simply set all of the global variables it has to

//-----------------------------------------------------------------------------------------------------



//Action-Event Handling
//-----------------------------------------------------------------------------------------------------
  //Reset the total count to 0 when timer done
    textBox.addEventListener('blur', () => {
      //If the text area is disabled, re-enable it  
        if(textBox.disabled){
          //Re-enable the text box
            textBox.disabled = false;   
            

          //NEW!!
            totalWordCount = 0;



          //OLD!!
          //Reset the total word count
            //const totalWordCount = document.getElementById('totalWords');
          //Set the total words to 0
            //totalWordCount.textContent = '0';

          //Reset the timer
            resetTimer();
        }

      //If the text box is disable, set the total word count to 0
        if(textBox.disabled){
          //Reset the total word count
            totalWordCount = 0;
        }      
    });


  //Start the test upon user input
    textBox.addEventListener('click', () => {
      //NEW!!
        //Randomly generate the text
        setText();

        //Place the cursor back to the beginning of the text    
          textBox.selectionStart = 0;
          textBox.selectionEnd = 0;       

      //Start the type test!!
        typeTest();

      //Set the test flag to false, so document stops listening for keydown
        testFlag = false;
    });


  //Add a general event-listener to the document
    document.addEventListener('keydown', function(event){
      //Dont collect the trigger keypress? 

      //Start the test once!!
        if(testFlag){
          //Make sure the char the user has entered to start the test is NOT recorded
            event.preventDefault();

          //Set the text of the document
            setText();
            
          //Start the test based on user input
            typeTest();
          
          //NEW!!
          //Put the textBox into focus
            textBox.focus();

          //Set the flag back to false
            testFlag = false;
        }
    });

  //Add an event-listener for the second dropdown menu that will change testKey
    dropDown.addEventListener('click', () => {
      //Set the test Key to the new value
        testKey = parseInt(dropDown.value, 10);

      // testKey = newValue;

      //DEBUG!!
        //textBox.value = randomText();

      //NEw!!
      // randomText();

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

//-----------------------------------------------------------------------------------------------------


//Type Test related Functions
//----------------------------------------------------------------------------------
  function typeTest(){
    //Capture the string contents of the randomly generated text
      const testTxt = textBox.value.substring(1, textBox.value.length);
    

    //Correctly matched char
      if(textBox.value.charAt(0) == testTxt.charAt(0)){
        //This works at incrementing the total words the user has guessed correctly
          if(textBox.value.charAt(0) == ' ' && testTxt.charAt(0) == ' '){
            //Increment the total word count!
              totalWordCount += 1;
 
              
            //OLD!!!
            //[ADDITIONAL IDEA!]: update totalWords to 0 upon start of every new test!
            //Get the total words displayed element!
              //const totalWordDisp = document.getElementById('totalWords');

            //Update the total word count display!
              //totalWordDisp.textContent = totalWordCount;
          }

        //Update the text within the textBox
          textBox.value = testTxt.substring(1, testTxt.length);
        
        //Place the user's cursor at the start of the text area/box
          textBox.selectionStart = 0;
          textBox.selectionEnd = 0;
      }
    //Else, unmatched char. keep the textBox as is!

    //[Rare Event]
    //All text has been correctly matched within the time frame!
      if(textBox.value == ' '){
        //Rare event!
          textBox.value = 'All text correctly matched!';

        //Change the color of the "winner!" text to gold
          textBox.style.color = 'gold';

          
        //Display a starburst animation??
          //code here...
      }    
  }
//----------------------------------------------------------------------------------



//Page Functions
//----------------------------------------------------------------------------------
  //Remove all of the dropdown menu's and extra items


  //Bring back the clutter after the test is done, or the user goes out of focus

//----------------------------------------------------------------------------------