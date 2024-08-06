/* 
[Author]: John Bostater

[Project Start Date]: 5/11/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 
*/


//Global Variables
//------------------------------------------------------
  //User's key for the type of test the user wants to chose
    let testKey = 0;  //0 is the default value
//------------------------------------------------------


//----------------------------------------------------------
//Functions for setting & generating the random text
//---------------------------------------------------------------------------------------- 
  //[Both: String eat & color eat]
  //Set up the typing test
  function setText(){   
    //If the timer is not already running, set the random text
      if(!isTimerRunning){
        //Set the random text
          textBox.value = randomText();
      
        //Place the user's cursor at the start of the text area/box
          textBox.selectionStart = 0;
          textBox.selectionEnd = 0;
      }
  }    

  
//[Both: String Eat && Color Eat]
//Function that will update the text being written or "followed along"
  function randomText(){  
    //Have a switch-case for the test's key!!
    //{i.e. [Numbers] is 2}
    ///*
    //
    switch(testKey){
      //Words of Programming Languages
      case 0:
        return programLanguageTest();
        
      //Commonly used English Words
      case 1:
        return commmonEnglishTest();
               
    }
  }
//---------------------------------------------------------------------------------------- 


//If you want the user to be able to change the content of the text test
//they can do so by manipulating the type of test via a dropdown menu

//This will set a key that will allow the user to
//

//Random Text functions
//---------------------------------------------------------------------------------------- 
  //Common Words of Programming Languages (default value : 0)
    function programLanguageTest(){
      //Randomized string to be used in text generation
        let randStr = '';

      //Variability of the random number generation (less recurring words higher the var)
        let variability = 10000000000000;


      //Produce 255 unique words for our string
        for(let i = 0; i < 255; i++){
          //Generate a new random number, modulo by 256 to produce # between 0 & 255
            let randNum = Math.floor((Math.random() * variability) % 40);    
    
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
                
              case 6:
                randStr += 'double ';
                break;

              case 7:
                randStr += 'bool ';
                break;

              case 8:
                randStr += 'string ';
                break;

              case 9:
                randStr += 'print ';
                break;

              case 10:
                randStr += 'switch ';
                break;

              case 11:
                randStr += 'case ';
                break;

              case 12:
                randStr += 'util ';
                break;

              case 13:
                randStr += 'let ';
                break;

              case 14:
                randStr += 'var ';
                break;

              case 15:
                randStr += 'div ';
                break;

              case 16:
                randStr += 'href ';
                break;

              case 17:
                randStr += 'cout ';
                break;

              case 18:
                randStr += 'console ';
                break;

              case 19:
                randStr += 'console ';
                break;

              case 20:
                randStr += 'auto ';
                break;

              case 21:
                randStr += 'linked ';
                break;

              case 22:
                randStr += 'map ';
                break;

              case 23:
                randStr += 'hash ';
                break;

              case 24:
                randStr += 'automata ';
                break;

              case 25:
                randStr += 'turing ';
                break;

              case 26:
                randStr += 'deterministic ';
                break;

              case 27:
                randStr += 'modulo ';
                break;
            
              case 28:
                randStr += 'infinite ';
                break;
            
              case 29:
                randStr += 'generalized ';
                break;
            
              case 30:
                randStr += 'extends ';
                break;

              case 31:
                randStr += 'inheritance ';
                break;
            
              case 32:
                randStr += 'implements ';
                break;
            
              case 33:
                randStr += 'generalization ';
                break;
                        
              case 34:
                randStr += 'double ';
                break;
            
              case 35:
                randStr += 'short ';
                break;
             
              case 36:
                randStr += 'algorithm ';
                break;
            
              case 37:
                randStr += 'model ';
                break;
             
              case 38:
                randStr += 'transistor ';
                break;
            
              case 39:
                randStr += 'definite ';
                break;
            
            }
        }
    
      //Return the randomly generated string
        return randStr;
    }


  //Common English Words 
    function commmonEnglishTest(){
      //Randomized string to be used in text generation
        let randStr = '';

      //Variability of the random number generation (less recurring words higher the var)
        let variability = 10000000000000;
      
      //Produce 255 unique words for our string
        for(let i = 0; i < 255; i++){
          //Generate a new random number, modulo by 256 to produce # between 0 & 255
            let randNum = Math.floor((Math.random() * variability) % 7);    

          //Switch-case for using the random number to generate a new word
            switch(randNum){
              case 0:
                randStr += 'the '
                break;

              case 1:
                randStr += 'be '
                break;

              case 2:
                randStr += 'to '
                break;

              case 3:
                randStr += 'of '
                break;

              case 4:
                randStr += 'it '
                break;

              case 5:
                randStr += 'and '
                break;

              case 6:
                randStr += 'you '
                break;
            }
        }
        
      //Return the string
        return randStr;
    }
//---------------------------------------------------------------------------------------- 