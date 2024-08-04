/*
[Author]: John Bostater

[Project Start Date]: //Here...

[Description]:
    //Description here
*/


//Global Variables
//-------------------------------------------------------------
  //Light/Dark mode toggle variables
    let triggerFlag = 0;
    let rotationAngle = 90;
  //Animation Elements
    const moonElement = document.getElementById('moon');
    const sunElement = document.getElementById('sun');
  //NEW!!
   // sunElement.style.opacity = 0;

  //Color Switch Elements
    const header = document.getElementById('colorSwitch');

  //Other stuff here!!
  //Flag for Light or Dark mode
    let darkModeFlag = false; //Dark Mode On  [default]


    //NEW!!
    let netFlag = 0;
//-------------------------------------------------------------


//NEW!!
debugFlag = false;
//localStorage.setItem('debug-flag', debugFlag);


//READ ME SUPER IMPORTANT OMG!!!
//NEW!!
//On loading of the window check to see if the settings flag has been activated 
// if flag == true activate [setSettings()] function which will apply the new settings
// [Do this via localStorage]

//DEBUG!!!
//NEW!!
function checkFlag(){
  //localStorage.setItem('debug-flag', debugFlag);
  alert(localStorage.getItem('debug-flag'));
}
//Reset all settings back to default (Dark Mode)
//[Set settingsFlag = false;]
function falseFlag(){
  debugFlag = true;
  localStorage.setItem('debug-flag', debugFlag);
}
//Use this function for setting the various settings!!
//[set settingsFlag = true;]
function trueFlag(){
  debugFlag = false;
  localStorage.setItem('debug-flag', debugFlag);
}



//DEBUG!!! (or keep if you end up liking it!)
//Load the toggle animation upon refreshing the page
window.onload = animation0();
//NEW!!!
sunElement.style.opacity = 0;


//Light/Dark Mode
//-----------------------------------------------------------
function animation0(){  
  //NEW IDEA!!!
  //Instead of rotate have a rise and fall animation for the moon or sun
  //    moonElement.style.transform = 'translateY(' + 90 + 'px)'
  //    sunElement.style.transform = 'translateY(' + 90 + 'px)'
  
  
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
  
  //NEW!!
    darkModeFlag = false;


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



//Custom Settings
//-----------------------------------------------------------
  //Change the background color of the doc! (purp, red, etc!)


  //Change the text field's font color!


  //Change the timer!
//-----------------------------------------------------------