/* 
[Author]: John Bostater

[Start Date]: 6/23/24

[Description]:
    //text here...

*/


//Button Action Event Handlers
//-----------------------------------------------------
  //Code here...

//-----------------------------------------------------


//Text Action-Event Handling
//-----------------------------------------------------

// Attach the function to the button's click event


//Set up the typing test!
function setText(){
  //DEBUG!
  alert('It worked!');
  
    // Get references to the elements
      const textInput = document.getElementById('hello');
      textInput.value = 'New Text';

      //Place the user's cursor at the start of the text area/box
      textInput.selectionStart = 0;
      textInput.selectionEnd = 0;
  }



//Function that will update the text being written or "followed along"
  function userEnteredText(){
    // Get references to the elements
    const textBox = document.getElementByClass('typeTestBox');

    // Add event listener to the textarea for live updates
    textBox.addEventListener('click', function() {
        // Update the <h1> with the current value of the textarea
        header.textContent = 'Hello World!';
    });
  }