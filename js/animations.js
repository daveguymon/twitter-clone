$(document).ready(function () {

    // hides tweet button and char count on page load
    $('#tweet-controls').hide();

    // shows tweet button and char count when textarea is clicked
    // doubles size of textarea when clicked
    $('textarea').on('click', function () {
        $('#tweet-controls').show();
        $(this).css('height', '5em');
    })
    
    
//    CONTROL CHARACTER COUNT WHEN USER TYPES STATUS

    // set #char-count to a variable, outside of a function
    var $maxChars = 140;
//    set number of characters typed in textarea to a variable
    var $typedChars = 0;
    var $remainingChars = 140;
    
    $('textarea').on('keyup', function () {
        $typedChars = $('textarea').val().length;
        $remainingChars = $maxChars - $typedChars;
       $('#char-count').text($remainingChars); 
        if($remainingChars <= 10) {
            $('#char-count').css('color', 'red');
        }
        else {
           $('#char-count').css('color', 'grey'); 
        }
    })
    
//    END OF - CONTROL CHARACTER COUNT WHEN USER TYPES STATUS
    
        
    






    // end of jquery script
})
