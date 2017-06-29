$(document).ready(function(){

// hides tweet button and char count on page load
  $('#tweet-controls').hide();

// shows tweet button and char count when textarea is clicked
// doubles size of textarea when clicked
  $('textarea').click(function(){
    $('#tweet-controls').show();
    $(this).css('height','5em');
  })

// set #char-count to a variable, outside of a function
var $maxCharacters = 140;
$('#char-count').text($maxCharacters);


// *******CONTINUE WORKING HERE*******
// **************************************
// decrement character count with each key press
$('.tweet-compose').keypress(function(){
  var $count = $('#char-count');
  var $characters = $(this).val().length;

  if($characters > $maxCharacters) {
    $count.addClass('over');
  } else {
    $count.removeClass('over');
  }
  $count.text($maxCharacters - $count);
})
// **********CONTINUE WORKING ABOVE***********




  // end of jquery script
})
