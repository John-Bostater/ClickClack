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


//DEBUG!!
function randomOne(){
  //NEW/DEBUG!
    const refreshButton = document.getElementById('refreshButton');
    
    refreshButton.addEventListener('click', function() {
      //DEBUG!!
        const textBox = document.getElementById('textBox');

      

      //alert('Hello World');
    });

}

//-----------------------------------------------------



//Text Action-Event Handling
//-----------------------------------------------------

// Attach the function to the button's click event


//Set up the typing test!
function setText(){ 

  //Get references to the elements
    const textBox = document.getElementById('textBox');
  
  //Set the random text
    textBox.value = randomText();

  //Place the user's cursor at the start of the text area/box
    textBox.selectionStart = 0;
    textBox.selectionEnd = 0;
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


//[String Eat]
//Function that will update the text as the user types along and correcyly matches chars
function userEnteredText(){
  //Set up an action-event listener/handler for the user entered text
  
  //DEBUG!!
  //REPLACE WITH METHOD/FUNCTION later!!
    userTimer = 7000;


  //[Note]:
  //  you may have to put the code below into the new function
  //  introduced above!!
  startTest();



  //To be used later!
  //  .substring(x,y)
  //  .charAt()

}
//-----------------------------------------------------




//Type Test related Functions
//---------------------------0--------------------------
var finished = false;
  
  //Set timer!
  ///* ORIGINAL!!!
  function startTest() {
    //Text area element/object
      const textBox = document.getElementById('textBox');
 
    //Reload the page?
    if(finished){
      timerId = '';
      

      location.reload();
    }
        
    //Capture the string contents of the randomly generated text
      const testTxt = textBox.value.substring(1, textBox.value.length);
    
    //See if the user's entered char matches that of the text they are matching
      //Match!
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


    //[FIX HERE!!]
    //[MAY NEED TO REFER TO 'boiler-Plate.html']
    //Disable the textarea after 10 seconds
      timerId = setTimeout(() => {
        //Blur the text area
       // textBox.blur();
        //textBox.


        //NEW!!!
          finished = true;

      }, userTimer); //[NOTE]: 10 seconds == 10000
      
  }
  //*/

