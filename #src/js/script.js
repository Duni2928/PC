function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
"use strict"
window.onload = function() {
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 300);
}
if (document.querySelector(".timer-page")) {
  const dayel = document.querySelector(".day");
  const hourel = document.querySelector(".hour");
  const minel = document.querySelector(".min");
  const secel = document.querySelector(".sec");
  let actiondate = new Date(2022, 05, 02, 10, 30, 0);
  let timer = setInterval(count, 1000);
  function count () {
    let now = new Date();
    let gap = actiondate - now;
    let day = Math.floor(gap / (24 * 60 * 60 * 1000));
    let hour = Math.floor((gap / 1000 / 60 / 60) % 24);
    let min = Math.floor((gap / 1000 / 60 ) % 60);
    let sec = Math.floor((gap / 1000 ) % 60);
    if (day < 10) {
      day = "0" + day
    }
    if (hour < 10) {
      hour = "0" + hour
    }
    if (min < 10) {
      min = "0" + min
    }
    if (sec < 10) {
      sec = "0" + sec
    }
    if (gap > 0) {
      dayel.innerHTML = day;
      hourel.innerHTML = hour;
      minel.innerHTML = min;
      secel.innerHTML = sec;
    }  
  }
}

const iconMenu = document.querySelector(".icon-menu");
const navMenu = document.querySelector(".nav-menu");
const navMenuList = document.querySelector(".nav-menu__list");
iconMenu.addEventListener("click", ()=> {
  if (!iconMenu.classList.contains("active")) {
    navMenu.style.transitionDelay = "0s";
    navMenuList.style.transitionDelay = ".3s";
    iconMenu.classList.add("active");
  } else {
    navMenu.style.transitionDelay = ".3s";
    navMenuList.style.transitionDelay = "0s";
    iconMenu.classList.remove("active");
  }
  document.body.classList.toggle("no-scroll")
})
const header = document.querySelector(".header");
window.addEventListener("scroll",()=> {
  if (window.scrollY > 168) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed")
  }
})
 const width = window.innerWidth;
 if (width < 768){
  if (document.querySelector(".partners-page__swiper")) {
    const swiperPartners = new Swiper('.partners-page__swiper', {
      slidesPerView: 1,
      breakpoints: {
        479.98: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
      },
      navigation: {
        nextEl: '.swiper-nav__item--next',
        prevEl: '.swiper-nav__item--prev',
      },
      speed: 800
    });   
  }
  if (document.querySelector(".team-page__swiper")) {
    const swiperTeam = new Swiper('.team-page__swiper', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-nav__item--next',
        prevEl: '.swiper-nav__item--prev',
      },
      speed: 800
    });   
  }
 }

window.addEventListener("scroll", ()=> {
  let windowTop = window.pageYOffset;
  let animate = document.querySelectorAll(".animate");
  animate.forEach(item=> {
    if (!item.classList.contains("animated")) {
      item.style.visibility = "hidden"
    }
    function offset(item) {
      let rect = item.getBoundingClientRect();
      let scrollLeft = window.pageXOffsetLeft || document.documentElement.scrollLeft;
      let scrollTop =  window.pageYOffsetLeft || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}      
    }
    let itemTop = offset(item).top;
    let itemPoint = window.innerHeight - item.offsetHeight * 0.5;
    if (item.offsetHeight === undefined) {
      let itemParent = item.parentNode;
      itemPoint = window.innerHeight - itemParent.offsetHeight/4;
    }
    if (windowTop > itemTop - itemPoint) {
      let animation = item.getAttribute("data-animation");
      item.style.visibility = "visible"
      item.classList.add(animation);
      item.classList.add("animated");
    }
  }) 
})


//falaaa