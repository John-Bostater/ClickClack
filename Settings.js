/*
[Author]: John Bostater

[Project Start Date]: 5/11/24

[Description]:
  Script for setting page elements for 'click clack' between HTML documents
*/


//Global Variables
//-------------------------------------------------------------
  //Light/Dark mode toggle variables
    let triggerFlag = 0;
    let rotationAngle = 90;
  //Animation Elements
    const moonElement = document.getElementById('moon');
    const sunElement = document.getElementById('sun');

  //DropDown Setting(s) Elements
    const backgroundDrop = document.getElementById('backgroundColorDrop');
    const fontcolorDrop = document.getElementById('fontColorDrop');
    const fontsizeDrop = document.getElementById('fontSizeDrop');
  
  //Color Switch Elements
    const header = document.getElementById('colorSwitch');

  //Array containing all of the user settings change
    let commandArray = [];

  //Other stuff here!!
  //Flag for Light or Dark mode
    let darkModeFlag = false; //Dark Mode On  [default]
  //Flag for the iteration
    let firstIter = true;
//-------------------------------------------------------------


//NEW!!
//debugFlag = false;
//localStorage.setItem('settingsFlag', debugFlag);



//READ ME SUPER IMPORTANT OMG!!!
//NEW!!
//On loading of the window check to see if the settings flag has been activated 
// if flag == true activate [setSettings()] function which will apply the new settings
// [Do this via localStorage]

//DEBUG FUNCTION!!
function checkFlag(){
  //localStorage.setItem('settingsFlag', debugFlag);
  alert(localStorage.getItem('settingsFlag'));
}


//Applying settings
//-----------------------------------------------------------
  //Reset all settings back to default (Dark Mode)
  //[Set settingsFlag = false;]
    function falseFlag(){
      //Reset all of the user's specified/saved settings
        localStorage.setItem('settingsFlag', false);
    }


  //Use this function for setting the various settings!!
  //[set settingsFlag = true;]
    function trueFlag(){
      //Have this function call the other functions
      //  This fuction should be in place of 'changeBackgroundColor()'
      //  for the 'Apply Settings' button
      
    }
//-----------------------------------------------------------


//DEBUG!!! (or keep if you end up liking it!)
//Load the toggle animation upon refreshing the page

//Default for animation
  moonElement.style.opacity = 0;
  sunElement.style.opacity = 0;

//If the user has not updated any of the settings, load default darkMode
if(localStorage.getItem('settingsFlag') == 'false'){
  //Load the darkMode
    window.onload = animation0();
}


//NEW!!
//Apply the settings the user has chosen so they can see what the final page will look like?
//Instead of apply settings have settings update upon dropdown change??
  backgroundDrop.addEventListener('focus', () => {
    document.body.style.backgroundColor = backgroundDrop.value;
  });

//Set the background color upon the user clicking out of the drop menu too!
  backgroundDrop.addEventListener('blur', () => {
    //
      document.body.style.backgroundColor = backgroundDrop.value;
  });



//Light/Dark Mode
//-----------------------------------------------------------
function animation0(){  
  //Rotate the moon and sun animation
    moonElement.style.transform = 'rotate(' + rotationAngle + 'deg)'
    rotationAngle += 180;
    sunElement.style.transform = 'rotate(' + rotationAngle + 'deg)'
    
    
  //Dark Mode   [ON]
    if(triggerFlag % 2 == 0){
      //Dark-Mode   [ON]
      //Fade the Moon in
        moonElement.classList.add('fadeIn');
        moonElement.classList.remove('fadeOut');
        moonElement.style.opacity = 1;
      //Dark-Mode function
        darkMode();
      //Set flag
        darkModeFlag = true;

      //Light-Mode  [OFF]
      //Fade the Sun out
        sunElement.classList.remove('fadeIn');
        sunElement.style.opacity = 0;

      //Add the sun's fade-out animation upon the second iteration
        if(!firstIter){
          //Fade the sun out
            sunElement.classList.add('fadeOut');
        }      

      //Stops any number overflow
        triggerFlag = 0;

      //set the first iteration flag to false
        firstIter = false;
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
      //Light-mode function
        lightMode();
        
      //Stops any number overflow
        triggerFlag = 1;
    }

  //Increment the trigger flag counter
    triggerFlag += 1;
}


//Switch the page to 'Light Mode' theme
  function lightMode(){
    //NEW!!
    //Move the element back to the left and remove the 'moveRight' animation from the 
    //classList!! 
    // [use]: document.getElementById('').classList.remove('moveRight');
    
    //Add the toggle off animation
      document.getElementById('toggleBall').classList.add('toggleOff');
    //Remove the toggle on animation
      document.getElementById('toggleBall').classList.remove('toggleOn');
    //Change the toggle bar's color
      document.getElementById('toggleBar').style.backgroundColor = 'lightblue';
    
    //Change headers and other text to their respective colors
      document.getElementById('colorSwitch').style.color = 'black';
      document.getElementById('timerHeader').style.color = 'black';
      document.getElementById('notificationText').style.color = 'black';
      dropDown.style.color = 'black';
      document.body.style.backgroundColor = 'white';  
    //Change the textboxs
      textBox.style.color = 'black';
      textBox.style.borderColor = 'black';

    //Set the flag back to false
      darkModeFlag = false;
  }


//Switch the page to the 'Dark Mode theme'
  function darkMode(){
    //Change headers and other text
      header.style.color = 'white';
      document.body.style.backgroundColor = 'black';
  
    //Toggle Dark-Mode on animation
      document.getElementById('toggleBall').classList.add('toggleOn');
    //Remove the toggle-off animation
      document.getElementById('toggleBall').classList.remove('toggleOff');
    //Change respective element's colors
      document.getElementById('toggleBar').style.backgroundColor = '#3A3A3A';
      document.getElementById('timerHeader').style.color = 'white';
      document.getElementById('notificationText').style.color = 'white';
    //Change the textboxs
      textBox.style.color = 'white';
      textBox.style.borderColor = 'white';

    //Set the dark-mode flag to true
      darkModeFlag = true;
  }
//-----------------------------------------------------------



//NEW!!
//Action-Event Listeners
//-----------------------------------------------------------
  //Have an action-event listener for 

//-----------------------------------------------------------



//Custom Settings
//-----------------------------------------------------------
  //Change the background color of the doc! (purp, red, etc!)
    function changeBackgroundColor(){
      //Get the dropdown value selected and set the local storage data!
     
      //Set the background color data to the dropdown value
        localStorage.setItem('backGroundColor', backgroundDrop.value);


      //Change the Settings background Color as a sample
        document.body.style.color = backgroundDrop.value;
        //document.body.style.color = 'red';
        //NEW!!
        //const hello = document.getElementById('backColor');
        //document.body.style.color = backgroundDrop.value;

      //Update the settings Flag
        localStorage.setItem('settingsFlag', true);
 
      //Push the command to update the background color to the array
        commandArray.push('0');

      //Update the array in local storage
        updateCommandArr();  
    }


  //Change the text field's font color!
    function changeFontColor(){
      //Set the background color data to the dropdown value
        localStorage.setItem('fontColorDrop', fontcolorDrop.value);

      //localStorage.setItem('settingsFlag', true);
        document.body.style.color = fontcolorDrop.value;
    
      //Update the settings Flag
        localStorage.setItem('settingsFlag', true);
 
      //Push the command to update the background color to the array
        commandArray.push('1');

      //Update the array in local storage
        updateCommandArr();  
    }


  //Change the text field's font size
    function changeFontSize(){
      //Check the value the user has entered and check to see if it is "Custom"
        if(fontsizeDrop.value != 'Custom'){
          //Update the local storage item accordingly
            localStorage.setItem('fontSizeDrop', fontsizeDrop.value);

        }
        //Else, the user will be entering a custom time!
        else{
          //Add the input field element to the html page and then get the user entered value 
        }


      //Set the font size data to the dropdown value
        //localStorage.setItem('fontSizeDrop', fontsizeDrop.value)
    }


  //Update the array containing all of the changed settings
    function updateCommandArr(){
      //Final commands to be executed
        const readArr= JSON.stringify(commandArray);    
    
      //[Update the name of the function if this stuff works out well!!]
        localStorage.setItem('commandArray', readArr);    
    }
//-----------------------------------------------------------