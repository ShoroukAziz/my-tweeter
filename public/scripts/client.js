/*
 * Client-side JS logic goes here
 */


const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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

/**
 * Creates a jQuery node for a tweet from a tweet object.
 * @param  {object}      tweet        [a tweet object]
 * @return {jQueryNode}               [an HTML article node that represents a tweet]
 */
const createTweetElement = function (tweet) {

  return $(`
  <article class="tweet">
    <header>
      <img alt="avatar" src=${tweet.user.avatars} />
      <span>${tweet.user.name}</span>
      <span class="handle">${tweet.user.handle}</span>
    </header>
    <section>
      ${escape(tweet.content.text)}
    </section>
    <footer>
      <time>${timeago.format(tweet.created_at)}</time>
      <div class="icons">
        <a href="#"><i class="fa-solid fa-flag"></i></a>
        <a href="#"><i class="fa-solid fa-retweet"></i></a>
        <a href="#"><i class="fa-solid fa-heart"></i></a>
      </div>
  </footer>
  </article>
  `);
}

const validateTweet = function (tweetText) {
  if (!tweetText) {
    return { isValid: false, errorMesage: 'Your Tweet can\'t be empty!' };
  }
  if (tweetText.length > 140) {
    return { isValid: false, errorMesage: 'Your Tweet can\'t be more than 140 characters.\nKeep it short & sweet!' };
  }
  return { isValid: true };
}

$(document).ready(function () {

  loadTweets();

  $('section.new-tweet form').on('submit', function (e) {

    e.preventDefault();

    const { isValid, errorMesage } = validateTweet($('#tweet-text').val());
    if (!isValid) {
      $('section.new-tweet').prepend(`
          <div class="user-input-warning">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p> ${errorMesage} </p>
          <i class="close fa-solid fa-circle-xmark"></i>
        </div>`);

      return;
    }

    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
      success: loadTweets
    });

  });

  // Attach a delegated event handler
  $('section.new-tweet').on('click', '.close', function (e) {
    $(this).parent().remove();
  })

});

