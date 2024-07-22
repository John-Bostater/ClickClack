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
  
  
 // */