/**
 * @fileoverview Contains js logic for composing a tweet interactively
 */

$(document).ready(function() {

  // Keep track of charachter count
  $('#tweet-text').on("input", function() {

    const currentCounter = MAX_TWEET_LENGHT - $(this).val().length;
    const counterNode = $(this).parent().children().find('output')[0];
    counterNode.innerText = currentCounter;
    if (currentCounter < 0) {
      $(counterNode).addClass('count-warning');
    } else {
      $(counterNode).removeClass('count-warning');
    }

  });

  // Automatically grow the text area to fit input
  $('#tweet-text').on("input", function() {

    $(this).css('overflow', 'hidden');
    $(this).height('10px');
    $(this).height($(this)[0].scrollHeight + 10 + "px");
  });



});