$(document).ready(function () {



    // hides tweet button and char count on page load
    $('#tweet-controls').hide();
    $('.tweet-actions li').hide();
    $('.tweet').hover(function () {
        $('.tweet-actions li', this).show();
    }, function () {
        $('.tweet-actions li', this).hide();
    })

    // shows tweet button and char count when textarea is clicked
    // doubles size of textarea when clicked
    $('textarea').on('click', function () {
        $('#tweet-controls').show();
        $('.tweet-compose').css('height', '5em');
    })


    //    CONTROL CHARACTER COUNT WHEN USER TYPES STATUS

    // set #char-count to a variable, outside of a function
    var maxChars = 140;
    //    set number of characters typed in textarea to a variable
    var typedChars = 0;
    var remainingChars = 140;

    $('textarea').on('keyup', function () {
        typedChars = $('textarea').val().length;
        remainingChars = maxChars - typedChars;
        $('#char-count').text(remainingChars);
        if (remainingChars <= 10) {
            $('#char-count').css('color', 'red');

        } else {
            $('#char-count').css('color', 'grey');
        }
        if (remainingChars < 0) {
            $('#tweet-submit').prop('disabled', true);
        } else {
            $('#tweet-submit').prop('disabled', false);
        }
    })

    //    END OF - CONTROL CHARACTER COUNT WHEN USER TYPES STATUS

    $('#tweet-submit').on('click', function () {
        var tweetContent = $('textarea').val();
//        $('.tweet-actions li').hide();

        //put tweeted content in twitter feed
        $('#stream').prepend(
            '<div class="tweet" id="cloneMe">' +
            '<div class="content">' +
            '<img class="avatar" src = "img/alagoon.jpg"/>' +
            '<strong class="fullname">Dave Guymon </strong>' +
            '<span class="username">@DaveGuymon</span>' +
            '<p class="tweet-text">' + tweetContent + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply "></span> Reply</li>' +
            '<li><span class="icon action-retweet "></span> Retweet</li>' +
            '<li><span class="icon action-favorite "></span> Favorite</li>' +
            '<li><span class="icon action-more "></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats">' +
            '<div class="retweets">' +
            '<p class="num-retweets">30</p>' +
            '<p>RETWEETS</p>' +
            '</div>' +
            '<div class="favorites">' +
            '<p class="num-favorites">6</p>' +
            '<p>FAVORITES</p>' +
            '</div>' +
            '<div class="users-interact">' +
            '<div>' +
            '<img src="img/jennyshen.jpg" />' +
            '<img src="img/damenleeturks.jpg"/>' +
            '</div>' +
            '</div>' +
            '<div class="time">1: 04 PM - 19 Sep 13 </div>' +
            '</div>' +
            '<div class="reply">' +
            '<img class="avatar"src = "img/alagoon.jpg"/>' +
            '<textarea class="tweet-compose" placeholder = "Reply to @DaveGuymon" / >' + '</textarea>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
    });

   $('.stats').hide();
    $('.tweet').on('click', function(){
        $('.stats', this).show();
    })
    $('.tweet').on('dblclick', function(){
        $('.stats', this).hide();
    })





    // end of jquery script
})
