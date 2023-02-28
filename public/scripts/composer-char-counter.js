const TWEET_LENGTH = 140;

$(document).ready(function () {
  // --- our code goes here ---

  $('#tweet-text').on("input", function () {

    const currentCounter = TWEET_LENGTH - $(this).val().length;
    const counterNode = $(this).parent().children().find('output')[0];
    counterNode.innerText = currentCounter
    if (currentCounter < 0) {
      $(counterNode).addClass('count-warning');
    }
    else {
      $(counterNode).removeClass('count-warning');
    }

  })



});