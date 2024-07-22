/* 
[Author]: John Bostater

[Start Date]: 6/23/24

[Description]:
  This JavaScript contains all of the relevant code for the 
  typing test program 'Click Clack' 

[Functions]: 

*/


//Global Variables
//--------------------
  //Timer (holds dropDown value)
    let userTimer;
  //Timer (holds global timer object)
    let timerId;

  //Flag used for having the test text
    //let focusFlag = true;



  //Type of test the user want's to use

//--------------------



//DropDown Action-Event Handlers
//-----------------------------------------------------
  //Select Test Type

  //Status: INCOMPLETE
  //Select Timer
    //This will update the global variable we have created!
    //[default time: 30 Seconds]
    function changeTimer(){
     // focusFlag = true;
      if(timerId){
        clearTimeout(timerId);
        return;
      }


      //Get the selected value from the dropdown menu
        const userSelection = document.getElementsByClassId('userTimer').getSelection();

      //DEBUG!!
        alert(userSelection);


      //Map the value # with each updated time!!
      

      //This will be used in a switch case statement for the shits
      //  switch(){}


    }


  //Select Text Size
//-----------------------------------------------------



//Button Action Event Handlers
//-----------------------------------------------------
  //Support Me! 
    //(load another page that had link to other websites and other info)


  //About the creator


  //Options/Settings
    //allow the user to 

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