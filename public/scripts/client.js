/*
 * Client-side JS logic goes here
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
      ${tweet.content.text}
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


$(document).ready(function () {

  loadTweets();
  $('section.new-tweet form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/tweets',
      data: $(this).serialize(),
    });

  })


});
