/**
 * @fileoverview Conatins main client-side JS logic
 */


/**
 * Fetches all tweets from the server then renders them.
 */
const loadTweets = function () {
  $.ajax({
    type: "GET",
    url: '/tweets',
    success: renderTweets,
  });
}

/**
 * Renders a list of tweets into the tweets secion.
 * @param  {Array.<tweet>} tweets       [a list of all the tweet objects that need to be rendered]
 */
const renderTweets = function (tweets) {

  const $tweetsSection = $('section.tweets');
  $tweetsSection.empty();
  tweets.forEach((tweet) => {
    $tweetsSection.prepend(createTweetElement(tweet));
  });

}


$(document).ready(function () {

  loadTweets();

  // New tweet form submit handler
  $('form').on('submit', function (e) {

    e.preventDefault();

    const { isValid, errorMesage } = validateTweet($('#tweet-text').val());

    if (!isValid) {
      $('form').prepend(createWarningElement(errorMesage));
      return;
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
      success: loadTweets
    });

  });

  // Attach a delegated event handler to close the warnings
  $('form').on('click', '.close', function (e) {
    $(this).parent().remove();
  })

});

