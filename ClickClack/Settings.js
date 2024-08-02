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

  //Color Switch Elements
    const header = document.getElementById('colorSwitch');

  //Other stuff here!!
  //Flag for Light or Dark mode
    let darkModeFlag = false; //Dark Mode On  [default]


    //NEW!!
    let netFlag = 0;
//-------------------------------------------------------------



///DEBUG!!
//alert(netFlag);
//textBox.value = netFlag;


//DEBUG!!! (or keep if you end up liking it!)
//Load the toggle animation upon refreshing the page
window.onload = animation0();

//NEW!!!
sunElement.style.opacity = 0;


//Light/Dark Mode
//-----------------------------------------------------------
function animation0(){  
  //DEBUG!!
    //textBox.value = 'No wayyyy';
    
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
  //
    localStorage.setItem("netFlag", netFlag++)
  
  //DEBUG!!!
    textBox.value = localStorage.getItem("netFlag");
  //DEBUG!!
//    textBox.value = 'HELLO!!!';

  //Change headers and other text
    document.getElementById('colorSwitch').style.color = 'black';
    document.body.style.backgroundColor = 'white';
    
  //Change the textboxs
    textBox.style.color = 'black';
    textBox.style.borderColor = 'black';

  //
}


//Switch the page to the 'Dark Mode theme'
  function darkMode(){
    //Flag Check
      if(darkModeFlag){
        //Change headers and other text
          header.style.color = 'white';
          document.body.style.backgroundColor = 'black';

        //Change the textboxs
          textBox.style.color = 'white';
          textBox.style.borderColor = 'white';
      }
  }
//-----------------------------------------------------------



//Other Settings
//-----------------------------------------------------------
//-----------------------------------------------------------