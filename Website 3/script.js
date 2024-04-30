let counterTwo = 0;
let counter = 0;

function locoMotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    tablet: { smooth: true },

    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
}

function scrollBar() {
  setTimeout(() => {
    document
      .querySelector(".c-scrollbar")
      .addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          scale: 0,
        });
      });
    document
      .querySelector(".c-scrollbar")
      .addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          scale: 1,
        });
      });
  }, 100);
}

function cursor() {
  if (window.innerWidth >= 1000) {
    window.addEventListener("mousemove", (dets) => {
      gsap.to("#cursor", {
        opacity: 1,
        left: `${dets.x}px`,
        top: `${dets.y}px`,
      });
    });

    (function makeCursorBig() {
      const bigCursorParents = document.querySelectorAll(".bigCursorParent");

      bigCursorParents.forEach((parent) => {
        parent.addEventListener("mouseenter", () => {
          gsap.to("#cursor", {
            scale: 1.8,
          });
        });
        parent.addEventListener("mouseleave", () => {
          gsap.to("#cursor", {
            scale: 1,
          });
        });
      });
    })();
  }
}

function line() {
  const lineParents = document.querySelectorAll(".linePar");
  const lines = document.querySelectorAll(".line");

  lineParents.forEach(function (line, index) {
    line.addEventListener("mouseenter", function () {
      gsap.to(lines[index], {
        width: "100%",
        duration: 0.3,
      });
    });
    line.addEventListener("mouseleave", () => {
      lines[index].style.left = "auto";
      lines[index].style.right = "0";
      gsap.to(lines[index], {
        width: "0%",
        duration: 0.2,
      });
      setTimeout(() => {
        lines[index].style.right = "auto";
        lines[index].style.left = "0";
        gsap.to(lines, {
          width: "0%",
          duration: 0.2,
        });
      }, 300);
    });
  });
}

function menu() {
  const navMenu = document.querySelector(".navMenu");
  const menuBack = document.querySelector(".navBackArrow");

  navMenu.addEventListener("click", () => {
    gsap.to(".menu-content", {
      bottom: "-20px",
      duration: 0.2,
    });
    gsap.to(".nav-links", {
      display: "flex",
      delay: 0.1,
    });
    gsap.to(".nav-link", {
      top: "0px",
      stagger: 0.05,
      delay: 0.05,
    });
  });
  menuBack.addEventListener("click", () => {
    gsap.to(".nav-link", {
      top: "-50px",
      stagger: 0.05,
    });
    setTimeout(() => {
      document.querySelector(".nav-links").style.display = "none";
    }, 100);
    gsap.to(".menu-content", {
      bottom: "0px",
      delay: 0.2,
    });
  });
}

function heroAnimations() {
  const navElems = document.querySelectorAll(".navElems > h3");
  const heroIconsCon = document.querySelectorAll(".hero-bottom-icons div");
  const heroIcons = document.querySelectorAll(".hero-bottom-icons i");
  const tl = gsap.timeline();

  tl.to(
    navElems,
    {
      bottom: "0px",
      duration: 0.8,
      ease: Expo.easeInOut,
    },
    "now"
  );
  tl.to(
    `.hero-content-text h1`,
    {
      bottom: "0px",
      duration: 0.8,
      ease: Expo.easeInOut,
    },
    "now"
  );
  tl.to(
    ".hero-content-text-3 h5",
    {
      top: 0,
      duration: 0.5,
      delay: -0.1,
    },
    "now2"
  );
  tl.to(
    "#hero-bottom-top div",
    {
      top: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.2,
    },
    "now2"
  );
  heroIconsCon.forEach((icon, index) => {
    icon.addEventListener("mouseenter", () => {
      const tl = gsap.timeline();

      tl.to(heroIcons[index], {
        bottom: -20,
        duration: 0.3,
      });
      tl.to(heroIcons[index], {
        bottom: 20,
        duration: 0,
      });
      tl.to(heroIcons[index], {
        bottom: 0,
        duration: 0.3,
      });
    });
  });
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
setInterval(() => {
  document.querySelector(".date").innerHTML = formatAMPM(new Date());
}, 10000);

function showPics() {
  const elems = document.querySelectorAll(".page2-elems");
  const imgs = document.querySelectorAll(".page2-elems img");

  let rotate = 0;
  let diff = 0;
  let result = 0;

  elems.forEach((elem, index) => {
    
    elem.addEventListener("mousemove", function (details) {
      const dets = elem.getBoundingClientRect();
      const { width, height } = imgs[index].getBoundingClientRect();

      diff = details.clientX - rotate;
      rotate = details.clientX;
      result = gsap.utils.clamp(-8, 8, diff);

      gsap.to(elems[index].querySelector("img"), {
        left: (details.x - dets.left) - (width / 2),
        top: details.y - dets.top - height / 2,
        rotate: result,
        duration: 0.5,
        ease: Expo.ease,
      });
      gsap.to("#cursor", {
        scale: 0,
        duration: 0,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        scale: 1,
        duration: 0,
      });
    });

  });
}

scrollBar();
cursor();
line();
menu();
heroAnimations();
showPics();
locoMotive();
