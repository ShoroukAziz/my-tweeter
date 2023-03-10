/**
 * @fileoverview Conatins main client-side JS logic
 */


/**
* displays the maximum tweet length in the submit tweet form's footer.
* @param  {number} maxTweetLength       [maximum allowed length for a tweet to be displayed]
*/
const displayMaxTweetLength = function(maxTweetLength) {
  $('output').text(maxTweetLength);
};

/**
 * Fetches all tweets from the server then renders them.
 */
const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: '/tweets',
    success: renderTweets,
    error: serverErrorHandler
  });
};

/**
 * Clears the text area after submitting a new tweet and fetches all the tweets again
 */
const newSubmittedTweetHandler = function() {

  $('textarea').val('');
  displayMaxTweetLength(MAX_TWEET_LENGHT);
  loadTweets();
};

/**
 * Renders a list of tweets into the tweets secion.
 * @param  {Array.<tweet>} tweets       [a list of all the tweet objects that need to be rendered]
 */
const renderTweets = function(tweets) {

  const $tweetsSection = $('section.tweets');
  $tweetsSection.empty();
  tweets.forEach((tweet) => {
    $tweetsSection.prepend(createTweetElement(tweet));
  });

};

/**
 * Displays an error message and a status code incases of server errors
 * @param  {object} err       [the error returned by the server]
 */
const serverErrorHandler = function(err) {
  console.log(err);
  $('main').empty();
  $('main').append(createServerErrorElement(err.status, err.responseJSON.error, err.statusText));
};



$(document).ready(function() {

  displayMaxTweetLength(MAX_TWEET_LENGHT);
  loadTweets();

  // New tweet form submit handler
  $('form').on('submit', function(e) {

    e.preventDefault();

    const { isValid, errorMesage } = validateTweet($('#tweet-text').val(), MAX_TWEET_LENGHT);

    if (!isValid) {

      const { warningElement, elementId } = createWarningElement(errorMesage);
      $('form').prepend(warningElement);

      // remove the warning after 2.5 seconds
      setTimeout(() => {
        $('form div').remove(`#${elementId}`);
      }, ERROR_MESSAGE_DISPLAY_TIME);
      return;
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
      success: newSubmittedTweetHandler,
      error: serverErrorHandler
    });

  });


  // Attach a delegated event handler to close the warnings
  $('form').on('click', '.close', function(e) {
    $(this).parent().remove();
  });

  // Attach a delegated event handler to like tweets
  $('.tweets').on("click", 'article.tweet .fa-heart', function(e) {

    e.preventDefault();
    $(this).toggleClass('liked', 'animateOnce');
    $(this).toggleClass('animateOnce');
  });


});

