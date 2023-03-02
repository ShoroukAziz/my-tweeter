/**
 * @fileoverview conatines helper functions used in client-side JS
 */


/**
 * Takes in some user input and returns an escaped version to preventXSS
 * @param  {string}   userInput   [the user raw input]
 * @return {string}               [an escaped version of the user input]
 */
const escape = function (userInput) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(userInput));
  return div.innerHTML;
};


/**
 * Checks wheather a tweet is valid (not empty & not more than the max tweet length characters)
 * and returns an appropriate error message in case it's not valid.
 * @param  {string}                 tweetText       [the user input]
 * @param  {number}                 maxTweetLength  [maximum allowed length for a tweet]
 * @return {{isValid: boolean,
 *           errorMesage:string}}                   [an object with a boolean that indicates validity and an error message incase of errors]
 */
const validateTweet = function (tweetText, maxTweetLength) {
  if (!tweetText.trim()) {
    return { isValid: false, errorMesage: systemMessages.emptyTweetError };
  }
  if (tweetText.length > maxTweetLength) {
    return { isValid: false, errorMesage: systemMessages.longTweetError };
  }
  return { isValid: true };
}

/**
 * Generates a random alphanumeric id
 * @return {string}        [random id]
 */
const generateRandomId = function () {
  return Math.random().toString(36).slice(2);;
}