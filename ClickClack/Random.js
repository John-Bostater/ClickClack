/* 
[Author]: John Bostater

[Project Start Date]: 5/11/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 

[Functions]: 

*/


//Global Variables
//------------------------------------------------------
  //User's key for the type of test the user wants to chose
    let testKey = 0;  //0 is the default value

  //Text area object/element
    const textArea1 = document.getElementById('textBox');
//------------------------------------------------------


//Action-Event handling for loading text!
//----------------------------------------------------------
  //Place the user's cursor at the beginning of the textArea
    textArea.addEventListener('click', () => {
      //Randomly generate the text
        setText();
      //Place the cursor back to the beginning of the text    
          textArea.selectionStart = 0;
          textArea.selectionEnd = 0;       
    });
//----------------------------------------------------------


//Functions for setting & generating the random text
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
  
    
    //For infinite type have special event!!!

    
    //USE THE FOLLOWING STRUCTURE BELOW IN THE FUNCTIONS FOR THE DIFFERENT TYPE
    //OF TYPE TEST CONTENTS
    //
    //LIST OF SOME FUNCTIONS/TYPE TESTS TO CREATE!!
    //
    //  [Common Words of programming languages] : 0
    //
    //  [Common Everyday English words] : 1
    //
    //  [Numbers] (numebrs as words) : 2
    
    
    //Have a switch-case for the test's key!!
    //{i.e. [Numbers] is 2}
    /*
    //
    switch(testKey){
      //Common Programming Languages
      case 0:
        return commonProgrammingTest();
        
        //Common Programming Languages
        case 1:
          return commonProgrammingTest();
          
          
          }
    */
    // IMPLEMENT THE FOLLOWING ABOVE ONCE YOU HAVE THE D
          

         
    //DEBUG RANDOM WORD GEN!!!
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
                randStr += 'variable ';      
                break;

              case 1:
                randStr += 'class ';
                break;

              case 2:
                randStr += 'system ';
                break;

              case 3:
                randStr += 'for ';
                break;

              case 4:
                randStr += 'while ';
                break;

              case 5:
                randStr += 'int ';
                break;
            }
        }
        
        //Return the randomly generated string
        return randStr;
    }
//---------------------------------------------------------------------------------------- 


//If you want the user to be able to change the content of the text test
//they can do so by manipulating the type of test via a dropdown menu

//This will set a key that will allow the user to
//

//Random Text functions
//---------------------------------------------------------------------------------------- 
  //Common Words of Programming Languages (default value : 0)
    function commonProgrammingTest(){
      //Randomized string to be used in text generation
        let randStr = ' ';

      //Variability of the random number generation (less recurring words higher the var)
        let variability = 10000000000000;


      //Produce 255 unique words for our string
        for(let i = 0; i < 255; i++){
          //Generate a new random number, modulo by 256 to produce # between 0 & 255
            let randNum = Math.floor(Math.random() * variability) % 256;    
    
          //Switch-case for using the random number to generate a new word
            switch(randNum){
              case 0:
                randStr += 'variable ';      
                break;

              case 1:
                randStr += 'class ';
                break;

              case 2:
                randStr += 'system ';
                break;

              case 3:
                randStr += 'for ';
                break;

              case 4:
                randStr += 'while ';
                break;

              case 5:
                randStr += 'int ';
                break;
            }
        }
    
      //Return the randomly generated string
        return randStr;
    }


  //Common English Words 
    //NEW!!
//---------------------------------------------------------------------------------------- 