/* eslint-disable */
'use strict';

var menuBtn = document.querySelector('.js-toggle');
var menuItem = document.querySelectorAll('.header-menu-list__link');
var headerList = document.querySelector('.header-menu-list');
var accordion = document.querySelector(".accordion");
var sliderTop = document.querySelector('.slider-wrapper');
var slider1 = document.querySelector(".swiper-wrapper");
if (slider1) {
  var slides = slider1.querySelectorAll('.swiper-slide');
}
var titles = document.querySelectorAll('.wrapper-question-title');
var answers = document.querySelectorAll('.answers');
var orders = document.querySelectorAll('.order');
var images = document.querySelectorAll('.img-wrapper');
var blocksArr = Array.from(orders).concat(Array.from(titles)).concat(Array.from(answers)).concat(Array.from(images));

// function scrollFunction1(el) {
// 
// let e = document.getElementById(el);
// // headerList.classList.add('visually-hidden');
// // menuBtn.classList.add('menu-closed');
// // menuBtn.classList.remove('menu-opened');
// // menuBtn.classList.add('js-unfreeze');
// // menuBtn.classList.remove('js-freeze');
// e.scrollIntoView({
//   // block: 'start',
//   behavior: 'smooth',
//   // inline: 'start'
// });


// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList =
  document.querySelectorAll(anchorSelector);

// Iterate through each of the links
anchorList.forEach(link => {
  link.onclick = function (e) {

    // Prevent scrolling if the
    // hash value is blank
    e.preventDefault();
    // Get the destination to scroll to
    // using the hash property
    let destination =
      document.querySelector(this.hash);
    if (window.innerWidth < 1200) {
    headerList.classList.add('visually-hidden');
    menuBtn.classList.add('menu-closed');
    menuBtn.classList.remove('menu-opened');
    menuBtn.classList.remove('js-freeze');
    menuBtn.classList.add('js-unfreeze');
    }
    // Scroll to the destination using
    // scrollIntoView method
    destination.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// }


function toggleSlides(className) {

  blocksArr.forEach(function (element) {
    if (element.classList.contains(className) && element.classList.contains('visually-hidden')) {
      element.classList.remove('visually-hidden');
    } else if (!element.classList.contains(className) && !element.classList.contains('visually-hidden')) {
      element.classList.add('visually-hidden');
    }
  });
};

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (slider1){
    var element = slider1.querySelector('.swiper-slide-active');
    var subElement = element.querySelector('.slider__slide');
    if (subElement.classList.contains('js-sport')) {
      toggleSlides('js-sport');
    } else if (subElement.classList.contains('js-anti')) {
      toggleSlides('js-anti');
    } else if (subElement.classList.contains('js-limfo')) {
      toggleSlides('js-limfo');
    } else if (subElement.classList.contains('js-stress')) {
      toggleSlides('js-stress');
    } else if (subElement.classList.contains('js-classic')) {
      toggleSlides('js-classic');
    };
    }
  });
});

var config = { attributes: true }

if (slider1) {
observer.observe(slider1, config);
}
// var sliderTypes = document.querySelector('.slider');
// var sliderMasseur = document.querySelector('.slider2');

// function isEven(value) {
//   if (value % 2 == 0)
//     return true;
//   else
//     return false;
// }

// window.onresize = function () {
//   console.log(sliderTypes.offsetWidth);
//   if (isEven(sliderTypes.offsetWidth)) {
//     sliderTypes.offsetWidth = sliderTypes.offsetWidth - 1;
//   } else if (!isEven(sliderTypes.offsetWidth)) {
//     sliderTypes.offsetWidth = sliderTypes.offsetWidth;
//   } else if (isEven(sliderMasseur.offsetWidth)) {
//     sliderMasseur.offsetWidth = sliderMasseur.offsetWidth - 1;
//   } else if (!isEven(sliderMasseur.offsetWidth)) {
//     sliderMasseur.offsetWidth = sliderMasseur.offsetWidth;
//   } else if (window.innerWidth >= 1200) {
//     headerList.classList.remove('visually-hidden');
//   } else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
//     headerList.classList.add('visually-hidden');
//   }
// };

window.onresize = function () {
  if (window.innerWidth >= 1200) {
    headerList.classList.remove('visually-hidden');
  } else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
    headerList.classList.add('visually-hidden');
  }
};

if (window.innerWidth >= 1200) {
  headerList.classList.remove('visually-hidden');
} else if (window.innerWidth < 1200 & !headerList.classList.contains('visually-hidden')) {
  headerList.classList.add('visually-hidden');
}

if (window.innerWidth >= 1200) {
  if (accordion && !accordion.classList.contains("is-active")) {
    accordion.classList.add("is-active");
  }
} else {
  if (accordion) accordion.classList.remove("is-active");
}

menuBtn.addEventListener('click', function () {
  if (headerList.classList.contains('visually-hidden')) {
    headerList.classList.remove('visually-hidden');
    menuBtn.classList.remove('menu-closed');
    menuBtn.classList.add('menu-opened');
    menuBtn.classList.add('js-freeze');
    menuBtn.classList.remove('js-unfreeze');
  } else {
    headerList.classList.add('visually-hidden');
    menuBtn.classList.add('menu-closed');
    menuBtn.classList.remove('menu-opened');
    menuBtn.classList.add('js-unfreeze');
    menuBtn.classList.remove('js-freeze');
  }
});




// function (t, e, i) {
//   "use strict";
//   function n() {
//     o(document).on("click", ".js-anchor", function (t) {
//       t.preventDefault();
//       var e = o(o(this).attr("href"));
//       e.length > 0 && o("body, html").stop().animate({ scrollTop: e.offset().top }, 1e3, "swing");
//     });
//   }
//   e.a = n;
//   var o = window.$;
// },


// menuItem.forEach(function(el){
//   el.addEventListener('click', function () {
//     if (!headerList.classList.contains('visually-hidden')) {
//       // window.open(el.href)
//       headerList.classList.add('visually-hidden');
//       menuBtn.classList.add('menu-closed');
//       menuBtn.classList.remove('menu-opened');
//       menuBtn.classList.add('js-unfreeze');
//       menuBtn.classList.remove('js-freeze');
//     }
//   });
// })


// var breakpoints = [560, 768, 1200, 1440, 1441];
// var breakpointsName = ['phablet', 'tablet', 'desktop', 'desktop-wide', 'very-wide'];

// function checkbp() {
//   var ww = $(window).width();
//   var returnVal = breakpointsName[0];

//   for (var i = 0; i < breakpoints.length; i++) {
//     if (ww > breakpoints[i]) {
//       returnVal = breakpointsName[i + 1];
//       if (i + 1 >= breakpoints.length) {
//         returnVal = breakpointsName[i];
//       }
//     }
//   }
//   return returnVal;
// }

// var breakpointLoaded = checkbp();
// var breakpointCurrent;

// $(window).resize(function () {
//   breakpointCurrent = checkbp();
//   if (breakpointLoaded != breakpointCurrent) {
//     window.location.href = window.location.href;
//     console.log('reloaded ' + breakpointCurrent);
//   };
//   console.log('loaded ' + breakpointLoaded + ' curent-' + breakpointCurrent);
// });

/* eslint-enable */
