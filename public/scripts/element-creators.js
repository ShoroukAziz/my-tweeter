/**
 * @fileoverview contains functions responsible for the creation of jQuery elements.
 */

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

/**
 * Creates a jQuery node for a warning from a warning message 
 * and assigns it a unique id, to be able to remove it after a few seconds.
 * @param  {string}                            errorMessage   [The warning message]
 * @return {{element:jQueryNode , id:number}}                [an object with a warning node and its unique id]
 */
const createWarningElement = function (errorMessage) {
  const id = generateRandomId();
  return {
    warningElement:
      $(`
    <div class="user-input-warning" id = "${id}">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p> ${errorMessage} </p>
        <i class="close fa-solid fa-circle-xmark"></i>
    </div>
  `),
    elementId: id
  };
}


/**
 * Creates a jQuery node for a sever errors
 * Displays the status code , states text and error message
 * @param  {number}           statusCode     [the response status code received from the server]
 * @param  {errorMessage}     errorMessage   [The error message received from the server]
 * @param  {statusText}       errorMessage   [The status message received from the server]
 * @return {jQueryNode}                  [an HTML div node that contains the error data]
 */
const createServerErrorElement = function (statusCode, errorMessage, statusText) {
  return $(`
    <div class="server-error">
      <h1> ${statusCode} </h1>
      <h2> ${statusText} </h2>
      <p> ${errorMessage} </p>
    </div>

`);
}