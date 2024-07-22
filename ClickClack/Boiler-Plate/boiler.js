/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !!!!      BOILER-PLATE HTML & JS FILES WORK    !!!!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


[To Do]:
    We just now need the Timer to only start upon user input


[Note for translating over to click-clack]:
    All of the functionality within the 'boiler-Plate.html' is executed as a defer
    {Meaning that it is executed upon creation of the .html (non-dynamic)}

    Therefore the timer function must be 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
[BUGS]:

- When two letters in the match text are paired together {i.e. 'll' in "Hello"}
  The user can exploit the text match to skip having to type/match ll by simply using a backspace

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/


//This function performs the text matching!
  function textMatchFunction(){    
      //Update textArea
        const textArea = document.getElementById('textArea');

      //Get the Text the user is trying to match
        const textMatch = textArea.value.substring(1, textArea.length);

        
      //Get the user's input and compare it to the textArea!
        if(textArea.value.charAt(0) == textMatch.charAt(0) && textArea.value.charAt(0) != '\b'){
          //WORKs!!
            textArea.value = textMatch.substring(1, textMatch.length);

          //Place user cursor back at the front of the text Area!
            textArea.selectionStart = 0;
            textArea.selectionEnd = 0;
        }

      //The user Has correctly matched all of the text!
        if(textArea.value == ' '){
            textArea.value = 'Winner!';
        }

  }


  ///*
  
  //Set up the typing test!
  function setText(){ 

    //Get references to the elements
      const textArea = document.getElementById('textArea');
    
    //Set the random text
      textArea.value = randomText();
  
    //Place the user's cursor at the start of the text area/box
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
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
              randStr += 'excellent ';
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
  
          }
      }
    
  
    //Return the randomly generated string
      return randStr;
  }
 // */