/**
 * @fileoverview Conatins all the logic for the composer buttons
 */


const NAV_HIGHT = 120;

/**
 * Scrolls to the top of the given element with a 25 px offeset.
 * taken into consideration the height of the sticky nav bar
 * @param  {jQueryNode} element       [The element you want to scroll to]
 * @param  {Number}     navHight      [The hight of the sticky nav bar in pixels]
 */
const scrollToElement = function(element, navHight = 0) {
  const elementTopPosition = element.offsetTop;
  window.scrollTo({
    top: elementTopPosition - navHight - 25,
    left: 0,
    behavior: 'smooth'
  });

};

$(document).ready(function() {

  // Scroll to the text area & focus whenever a compose button is clicked
  $('.compose').click(function() {

    $("textarea")[0].focus();
    scrollToElement($("form")[0], NAV_HIGHT);

  });

  /* Display the composer button in the nav bar
  *  when the page is not scrolled
  *  and, on scrolling hide it and display the other button down the page.
  */
  $(window).scroll(function() {

    if ($(window).scrollTop() > 0) {
      $('button.compose').addClass('visable');
      $('nav div.compose').addClass('hidden');
    } else {
      $('button.compose').removeClass('visable');
      $('nav div.compose').removeClass('hidden');
    }
  });

});
