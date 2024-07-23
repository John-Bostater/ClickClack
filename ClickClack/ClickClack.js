/* 
[Author]: John Bostater

[Start Date]: 6/23/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 

[Functions]: 

*/



//Button Action Event Handlers
//-----------------------------------------------------
  //Support Me! 
    //(load another page that had link to other websites and other info)


  //About the creator


  //Options/Settings
    //allow the user to change more features of the click click display/menu
    //This button will load a new html doc that allows the user to change the 
    //values of 'ActiveLib2.js' which will be another defer file in 'ClickClack.html' that will have 
    //action event-handlers set for all of the 'SettingsPage.html' for the user to change more features
    
    //The second defer file 'ActiveLib2.js' will simply set all of the global variables it has to

//-----------------------------------------------------



//Type Test related Functions
//-----------------------------------------------------
  function startTest() {
    //Text area element/object
      const textBox = document.getElementById('textBox');
        
    //Capture the string contents of the randomly generated text
      const testTxt = textBox.value.substring(1, textBox.value.length);
    
    //Matched char!
      if(textBox.value.charAt(0) == testTxt.charAt(0)){
        //Update the text within the textarea
          textBox.value = testTxt.substring(1, testTxt.length);
        
        //Place the user's cursor at the start of the text area/box
          textBox.selectionStart = 0;
          textBox.selectionEnd = 0;
      }
    //Else, unmatched char. keep the textarea as is!


    //All text has been correctly matched within the time frame!
      if(textBox.value == ' '){
        //Rare event!
          alert('All text matched!');
          textBox.value = 'All text correctly matched!';

        //Change the color of the "winner!" text to gold
          textBox.style.color = 'gold';

        //Display a starburst animation??
          //code here...
      }    
  }