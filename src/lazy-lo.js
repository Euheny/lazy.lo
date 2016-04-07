(function() {
  var lazylo = {};

  lazylo.lazylo_image = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

  lazylo.view_elements = [];

  lazylo.reveal = function() {
    for (var count = 0; count < lazylo.view_elements.length; count++) {
      var offsetParentTop = 0;
      var temp = lazylo.view_elements[count];

      do {
        if (!isNaN(temp.offsetTop)) {
          offsetParentTop += temp.offsetTop;
        }
      } while (temp = temp.offsetParent)

      var pageYOffset = window.pageYOffset;
      var viewportHeight = window.innerHeight;

      var offsetParentLeft = 0;
      var temp = lazylo.view_elements[count];

      do {
        if (!isNaN(temp.offsetLeft)) {
          offsetParentLeft += temp.offsetLeft;
        }
      } while (temp = temp.offsetParent);

      var pageXOffset = window.pageXOffset;
      var viewportWidth = window.innerWidth;

      if (offsetParentTop > pageYOffset && offsetParentTop < pageYOffset + viewportHeight && offsetParentLeft > pageXOffset && offsetParentLeft < pageXOffset + viewportWidth) {
        lazylo.view_elements[count].src = lazylo.view_elements[count].getAttribute("data-lazylo-src");
        lazylo.view_elements[count].onload = function() {
          this.setAttribute("data-lazylo-state", "loaded");
        };
        lazylo.view_elements.splice(count, 1);
        count--;
      }
    }
  };

  window.addEventListener("resize", lazylo.reveal, false);
  window.addEventListener("scroll", lazylo.reveal, false);

  lazylo.lazylo_list_maker = function() {
    var elements = document.querySelectorAll("img[data-lazylo][data-lazylo='true']");

    for (var count = 0; count < elements.length; count++) {
      lazylo.view_elements.push(elements[count]);
      elements[count].setAttribute("data-lazylo", "false");

      var source_url = elements[count].src;

      elements[count].setAttribute("data-lazylo-src", source_url);
      elements[count].setAttribute("data-lazylo-state", 'waiting');

      elements[count].src = elements[count].getAttribute("data-lazylo-placeholder") || lazylo.lazylo_image;
    }
  };

  lazylo.intervalObject = setInterval(function() {
    lazylo.lazylo_list_maker();
  }, 50);

  window.addEventListener("load", function() {
    clearInterval(lazylo.intervalObject);
    lazylo.lazylo_list_maker();
    lazylo.reveal();
  }, false);
})()
