var moment = require("moment");
console.log(moment().startOf("day").fromNow());
// Wait for window load
// $(window).load(function () {
//      // Animate loader off screen
//      $(".se-pre-con").fadeOut("slow");
// });
window.onload = function () {
     var x = document.querySelector(".se-pre-con");
     x.style.display = "none";
     console.log("page loaded");
};

const slidersImage = document.querySelectorAll("img");
// once the page is fully loaded, take away the display
slidersImage.forEach((image) => {
     image.classList.add("nodisplay");
});
function debounce(func, wait = 20, immediate = true) {
     var timeout;
     return function () {
          var context = this,
               args = arguments;
          var later = function () {
               timeout = null;
               if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
     };
}

function checkslide(e) {
     slidersImage.forEach((image) => {
          // halfway throught the image
          const slideInAt =
               window.scrollY + window.innerHeight - image.height / 2;
          // bottome of image
          const imageButtom = image.offsetTop + image.height;
          const isHalftShown = slideInAt > image.offsetTop;
          const isNotScrolledPass = window.scrollY < imageButtom;

          if (isHalftShown && isNotScrolledPass) {
               if (image.classList.contains("left")) {
                    image.classList.remove("nodisplay");
                    image.classList.add("active2");
               } else {
                    image.classList.remove("nodisplay");
                    image.classList.add("active");
               }
          } else {
               image.classList.add("nodisplay");
               image.classList.remove("active");
          }
     });
}

window.addEventListener("scroll", debounce(checkslide));
