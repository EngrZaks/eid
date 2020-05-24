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

const slidersImage = document.querySelectorAll("img");
console.log(slidersImage);
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
                    image.classList.add("active2");
               } else {
                    image.classList.add("active");
               }
          } else {
               image.classList.remove("active");
          }
     });
}

window.addEventListener("scroll", debounce(checkslide));
