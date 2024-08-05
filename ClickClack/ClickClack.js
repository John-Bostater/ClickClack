/* 
[Author]: John Bostater

[Start Date]: 6/23/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 

*/


//Global variables
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

  //Flag for 'removing the clutter'
    let clutterFlag = true;
//-----------------------------------------------------------


//NEW!!
//  localStorage.setItem('settingsFlag', false);

//NEW!!!
//Apply any custom settings to the page if the flag has been activated!
//if(localStorage.getItem('settingsFlag')) {
  //create the local storage item if it does not already exist!
//    localStorage.setItem('settingsFlag', false);
//}
//DEBUG!!
//textBox.textContent = localStorage.getItem('settingsFlag');


//If the settings have been changed, apply the new settings
if(localStorage.getItem('settingsFlag') == 'true'){
  //DEBUG!
    textBox.textContent = localStorage.getItem('backGroundColor');
// THIS WORKS!!
//darkModeFlag = false;

  //Apply the settings if the flag returns true
    applySettings();
}



//Action-Event Handling
//-----------------------------------------------------------------------------------------------------
  //Reset the total count to 0 when timer done
    textBox.addEventListener('blur', () => {
      //If the notification has NOT been removed, remove it
        if(!clutterFlag){
          fillPage();
          clutterFlag = true;
        }

      //Change the notification color based on darkmode or light mode
        if(!darkModeFlag){
          document.getElementById('notificationText').style.color = 'black';
        }


      //If the text area is disabled, re-enable it  
        if(textBox.disabled){
          //Re-enable the text box
            textBox.disabled = false;   
            
          //Set the total word count back to 0 for the next test
            totalWordCount = 0;

          //Reset the timer
            resetTimer();
      
          //Reset the total word count
            totalWordCount = 0;
        }      
    });


  //Remove notifications
    textBox.addEventListener('focus', () => {
      //If the flag is activated, remove the notification
        if(clutterFlag){
          removeClutter();
          clutterFlag = false;
        }

    });


  //Start the test upon user input
    textBox.addEventListener('click', () => {
      //NEW!!
        //testFlag = false;

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
      
      //List of keys the user is NOT allowed to use
        const forbiddenKeys = [
          'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
          'Home', 'End', 'PageUp', 'PageDown', 'Enter'
        ];


      //Stop the user's input of the forbidden keys
        if(forbiddenKeys.includes(event.key)){
          event.preventDefault(); 
        }

        
      //Start the test once!!
        if(testFlag){
          //Make sure the char the user has entered to start the test is NOT recorded
            event.preventDefault();

          //Set the text of the document
            setText();
            
          //Start the test based on user input
            typeTest();
          
          //Put the textBox into focus
            textBox.focus();

          //Set the flag back to false
            testFlag = false;
        }
    });


  //Add an event-listener for the second dropdown menu that will change testKey
    dropDown.addEventListener('click', () => {
      //Set the test Key to the new value {convert from string to number}
        testKey = Number(dropDown.value);
    });


  //Event listeners for the dropdown menu for changing the Timer
    timerDropDown.addEventListener('click', () =>{
      //Update the timer upon every user interaction with the dropDown menu
      //[Default drop down value is: 0]

      //If the timer is in-progress, reset it!!
        if(isTimerRunning){
          resetTimer();
        }

      //Load a function that will allow the user to manually
      //Enter their own time upon the dropdown's value being
      //'Custom Time' (or something to that effect)
        if(timerDropDown.value == 'Custom Time'){
          //Call upon the function for setting the time
            customTime();

          //IMPLEMENT STUFF BELOW THIS TO THE FUNCTION ABOVE?!?!?!
            //Get the key of the selected time
             timerKey = timerDropDown.value;
            //Set the timer's display
              timerDisplay.textContent = setTimer(timerKey);
            //Set the timer
              countdown = setTimer(timerKey);

          //Stop parsing code
            return;
        }


      //Get the key of the selected time
        timerKey = timerDropDown.value;

      //Set the timer's display
        timerDisplay.textContent = setTimer(timerKey);
    
      //Set the timer
        countdown = setTimer(timerKey);
    });


  //Make sure the user CANNOT select the rest of the text
    textBox.addEventListener('select', () => {
      //place the cursor to the beginning?    
        textBox.selectionStart = 0;
        textBox.selectionEnd = 0;       
    });    
//-----------------------------------------------------------------------------------------------------


//Type Test related Functions
//----------------------------------------------------------------------------------
  function typeTest(){
    //NEW!!
    //Remove the clutter to put more focus on the text
      
    
    //Capture the string contents of the randomly generated text
      const testTxt = textBox.value.substring(1, textBox.value.length);
      
    //Correctly matched char
      if(textBox.value.charAt(0) == testTxt.charAt(0)){
        //This works at incrementing the total words the user has guessed correctly
          if(textBox.value.charAt(0) == ' ' && testTxt.charAt(0) == ' '){
            //Increment the total word count!
              totalWordCount += 1;
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
    function removeClutter(){
      //This will remove all of the headers and unecessary text from the html doc
        
      //If the remove clutter flag has stayed the same
     // if(clutterFlag){
        //Elements to be removed
          const removeMe = document.getElementById('notificationText');

        //Remove the following!
          removeMe.parentNode.removeChild(removeMe);
   
        //NEW!!
        //Set the flag back to false??
         // clutterFlag = false;
    // }

    }


  //Bring back the clutter after the test is done, or the user goes out of focus
    function fillPage(){
      //Container we will be adding our element back to
        const addBackContainer = document.getElementById('testContainer');
      
      //Recreate the elements to add back to the page!!!
        const newParagraph = document.createElement('p');
        newParagraph.textContent = '*Click the Text Area to proceed'
        newParagraph.id = 'notificationText';
      
      //Remove the following!
        addBackContainer.appendChild(newParagraph);    
    }

 
  //Apply the settings the user has entered into the dropdown!
    function applySettings(){
      //Check if the flag has been activated! (this will be done if interaction with ANY dropdown)
      //   if(localStorage.getItem('settingsFlag') == 'true'){
      //If the flag has been activated use the switch-case to parse the 'changedSettings'


      //JSON String to be read
      //  const jsonString = localStorage.getItem('commandArray');
        const jsonString = localStorage.getItem('commandArray');

      //Parse the json String and place the items into an array?
        const hello = JSON.parse(jsonString);

          
      //do a for-loop that will parse the array for the array's length
        for(let i = 0; i < hello.length; i++){
          //Switch case for updating the settings per the array
            const updateIndex = hello[i];

          //Switch-case for updating the selected array
            switch(updateIndex){
              //Background Color 
                case '0':
                  //DEBUG!!
                    //textBox.textContent = 'Background color change!';

                  //Update the background color
                    document.body.style.backgroundColor = localStorage.getItem('backGroundColor');
                break;

              //DEBUG!!
                case '2':
                  //DEBUG!
                    textBox.textContent = 'DEBUG!!';
                break;
          
              //DEBUG!!
                case '3':
                  //DEBUG!
                    textBox.textContent = 'Okay okay';
                break;

            }
        }

      //Reset the command array (stop overflow)
        localStorage.setItem('commandArray', 0);
    }
//----------------------------------------------------------------------------------