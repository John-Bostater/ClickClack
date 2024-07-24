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
              randStr += 'seemingly ';
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
  
            case 14:
              randStr += 'zion ';
              break;
  
            case 15:
              randStr += 'around ';
              break;
  
            case 16:
              randStr += 'kind ';
              break;
  
          }
      }
  
    //Return the randomly generated string
      return randStr;
  }
//---------------------------------------------------------------------------------------- 
