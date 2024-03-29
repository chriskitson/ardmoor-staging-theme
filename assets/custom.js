/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

// product tabs
jQuery(function() {
    jQuery('.product-block-list__tabs_navigation a').on('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      var $el = $(event.target);
      jQuery('.product-block-list__tabs_navigation a.selected').toggleClass('selected', false);
      jQuery('.product-block-list__tab').toggle(false);
      $el.addClass('selected');
      jQuery($el.attr('href')).toggle(true);
    });
    jQuery('.product-tab--description').on('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      var $el = $('.product-block-list__tabs_navigation ul li:first-child a');
      jQuery('.product-block-list__tabs_navigation a.selected').toggleClass('selected', false);
      jQuery('.product-block-list__tab').toggle(false);
      $el.addClass('selected');
      jQuery($el.attr('href')).toggle(true);
      window.scrollTo(0, $('#product-description').position().top);
    });
});

// product review tabs
jQuery('.trustpilot-link').on('click', function(e) {
  event.preventDefault();
  event.stopImmediatePropagation();
  jQuery('.product-block-list__tabs_navigation a.selected').toggleClass('selected', false);
  jQuery('.product-block-list__tab').toggle(false);
  var $el = $("#product-block-list__tabs_navigation a[href='#product-tp-reviews']");
  $el.addClass('selected');
  jQuery($el.attr('href')).toggle(true);
});