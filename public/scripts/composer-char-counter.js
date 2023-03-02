const TWEET_LENGTH = 140;

$(document).ready(function () {

  // Keep track of charachter count
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

  // Automatically grow the text area to fit input
  $('#tweet-text').on("input", function () {

    $(this).css('overflow', 'hidden')
    $(this).height('10px')
    $(this).height($(this)[0].scrollHeight + 10 + "px");
  })



});