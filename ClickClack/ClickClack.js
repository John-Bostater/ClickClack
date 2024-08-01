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

  //Flag for 'removing the clutter'
    let clutterFlag = true;


  //Light/Dark Mode Animation
  //NEW!!!
    let triggerFlag = 0;
    const moonElement = document.getElementById('moon');
    const sunElement = document.getElementById('sun');
    //const debug10 = document.getElementById('');
  //NEW!!!!!
  //NEW!!!
    let moonRotationAngle = 90;
    let sunRotationAngle = 90;
  

  //List of containers that will be removed upon focus of the text box
//-----------------------------------------------------------


//NEW!!!
sunElement.style.opacity = 0;


//NEW!!!
//Light/Dark Mode Animation
function animation0(){  
  //DEBUG!!
  //textBox.value = 'No wayyyy';
    
  //Rotate the moon and sun animation
    moonElement.style.transform = 'rotate(' + moonRotationAngle + 'deg)'
    
    moonRotationAngle += 180;
    sunRotationAngle += 180;
    
    sunElement.style.transform = 'rotate(' + sunRotationAngle + 'deg)'
    
    
    //Dark Mode   [ON]
    if(triggerFlag % 2 == 0){
      //Dark-Mode   [ON]
      //Fade the Moon in
        moonElement.classList.add('fadeIn');
        moonElement.classList.remove('fadeOut');
        moonElement.style.opacity = 1;


      //Light-Mode  [OFF]
      //Fade the Sun out
        sunElement.classList.remove('fadeIn');
        sunElement.classList.add('fadeOut');
        sunElement.style.opacity = 0;

      //Stops any number overflow
        triggerFlag = 0;
    }
  

  //Light Mode  [ON]
    if(triggerFlag % 2 == 1){
      //Dark-Mode   [OFF]
      //Fade the Moon out
        moonElement.classList.remove('fadeIn');  
        moonElement.classList.add('fadeOut');
        moonElement.style.opacity = 0;


      //Light-Mode  [ON]
      //Fade the Sun IN
        sunElement.classList.remove('fadeOut');
        sunElement.classList.add('fadeIn');
        sunElement.style.opacity = 1;


      //DEBUG!!
      //  textBox.value = triggerFlag;       
        
      //Stops any number overflow
        triggerFlag = 1;
    }


    //Increment the trigger flag counter
      triggerFlag += 1;
  }


  //DEBUG!!! (or keep if you end up liking it!)
  //Load the toggle animation upon refreshing the page
    window.onload = animation0();
 


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
      //NEW!!!
        if(!clutterFlag){
          fillPage();

          clutterFlag = true;
        }

      //If the text area is disabled, re-enable it  
        if(textBox.disabled){
          //Re-enable the text box
            textBox.disabled = false;   
            
          //Set the total word count back to 0 for the next test
            totalWordCount = 0;

          //Reset the timer
            resetTimer();
        }

      //If the text box is disable, set the total word count to 0
        if(textBox.disabled){
          //Reset the total word count
            totalWordCount = 0;
        }      
    });

  //NEW!!
  textBox.addEventListener('focus', () => {
    //NEW!!
    //Set the clutter flag back to true?
      //clutterFlag = true;

    //NEW!!
      if(clutterFlag){
        removeClutter();
        clutterFlag=false;
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
      const forbiddenKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', // Arrow keys
        'Home', 'End', 'PageUp', 'PageDown'                // Home, End, Page Up, Page Down
      ];

      if (forbiddenKeys.includes(event.key)) {
        event.preventDefault(); // Prevent default behavior for forbidden keys
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
//*/

  //Add an event-listener for the second dropdown menu that will change testKey
    dropDown.addEventListener('click', () => {
      //Set the test Key to the new value
        testKey = parseInt(dropDown.value, 10);
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
    //Remove the clutter to put more focus on the text
      
    ///*
   // if(clutterFlag){
    //  removeClutter();
     // clutterFlag=false;
    //}
      //*/

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
          const removeMe = document.getElementById('proceedFlag');

        //Remove the following!
          removeMe.parentNode.removeChild(removeMe);
   
        //NEW!!
        //Set the flag back to false??
         // clutterFlag = false;
    // }

    }


  //Bring back the clutter after the test is done, or the user goes out of focus
    function fillPage(){
      //Elements to be removed
        const addBackContainer = document.getElementById('vertical0');

      //Recreate the elements to add back to the page!!!
        const newParagraph = document.createElement('p');
        newParagraph.textContent = '*Press any key to proceed'
        newParagraph.className = 'proceedKey';
        newParagraph.id = 'proceedKey';
      
      //Remove the following!
        addBackContainer.appendChild(newParagraph);    
    }
//----------------------------------------------------------------------------------