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
 * Checks wheather a tweet is valid (not empty & not more than 140 characters)
 * and returns an appropriate error message in case it's not valid.
 * @param  {string}                 tweetText   [the user input]
 * @return {{isValid: boolean,
 *           errorMesage:string}}               [an object with a boolean that indicates validity and an error message incase of errors]
 */
const validateTweet = function (tweetText) {
  if (!tweetText) {
    return { isValid: false, errorMesage: 'Your Tweet can\'t be empty!' };
  }
  if (tweetText.length > 140) {
    return { isValid: false, errorMesage: 'Your Tweet can\'t be more than 140 characters. Keep it short & sweet!' };
  }
  return { isValid: true };
}
