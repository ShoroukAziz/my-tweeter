const NAV_HIGHT = 120;

/**
 * Scrolls to the top of the given element with a 25 px offeset.
 * taken into consideration the height of the sticky nav bar
 * @param  {jQueryNode} element       [The element you want to scroll to]
 * @param  {Number}     navHight      [The hight of the sticky nav bar in pixels]
 */
const scrollToElement = function (element, navHight = 0) {
  const elementTopPosition = element.offsetTop;
  window.scrollTo({
    top: elementTopPosition - navHight - 25,
    left: 0,
    behavior: 'smooth'
  });

}

$(document).ready(function () {

  $('.compose').click(function () {

    const textAreaElement = $(".new-tweet textarea")[0];
    scrollToElement(textAreaElement, NAV_HIGHT);
    textAreaElement.focus();

  });


});
