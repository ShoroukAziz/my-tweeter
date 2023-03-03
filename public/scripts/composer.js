/**
 * @fileoverview Conatins all the logic for the composer buttons
 */


/**
 * Scrolls to the top of the page.
 */
const scrollToTop = function () {
  window.scrollTo({ top: 0 });
};

$(document).ready(function () {

  // Scroll to the text area & focus whenever a compose button is clicked
  $('nav .compose').click(function () {

    const formElement = $('form');

    //first click
    if (!formElement.hasClass('slideUp') && !formElement.hasClass('slideDown')) {
      formElement.toggleClass('slideUp');
      formElement.addClass('hidden');
    }
    else if (formElement.hasClass('slideUp')) {
      formElement.toggleClass('slideDown');
      formElement.toggleClass('slideUp');
      setTimeout(() => {
        formElement.toggleClass('hidden');
      }, 500);
    }
    else {
      formElement.toggleClass('slideDown');
      formElement.toggleClass('slideUp');
      formElement.toggleClass('hidden');

    }

    $("textarea")[0].focus();
  });


  $('button.compose').click(function () {

    const formElement = $('form');

    //first click
    if (formElement.hasClass('slideUp')) {
      formElement.toggleClass('slideUp');
      formElement.addClass('hidden');
      formElement.toggleClass('slideDown');
    }

    $("textarea")[0].focus();
    scrollToTop();

  });

  /* Display the composer button in the nav bar
  *  when the page is not scrolled
  *  and, on scrolling hide it and display the other button down the page.
  */
  $(window).scroll(function () {

    if ($(window).scrollTop() > 0) {
      $('button.compose').addClass('visable');
      $('nav div.compose').addClass('hidden');
    } else {
      $('button.compose').removeClass('visable');
      $('nav div.compose').removeClass('hidden');
    }
  });

});
