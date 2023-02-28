/*
 * Client-side JS logic goes here
 */


// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
      <time>${tweet.created_at}</time>
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
  renderTweets(data);
});
