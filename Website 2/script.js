// For Moving Cursor
const cursor = document.querySelector("#cursor");
const blurCursor = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    left: e.x - 20,
    top: e.y - 20,
    duration: 2.5,
  });
  gsap.to(blurCursor, {
    left: e.x - 230,
    top: e.y - 230,
    duration: 2.5,
  });
});

// For Changing Cursor
function enterCursor() {
  gsap.to(cursor, {
    backgroundColor: "transparent",
    border: "1px solid white",
    scale: 2,
  });
}
function leaveCursor() {
  gsap.to(cursor, {
    backgroundColor: "#95c11e",
    border: "2px solid transparent",
    scale: 1,
  });
}

// Actual change in Cursor
const scrollerArrow = document.querySelector(".scroller-arrow");
const footer = document.querySelector("#footer");
const cards = document.querySelectorAll(".card");
const navLinks = document.querySelectorAll("#nav h4");
const rotatingImgs = document.querySelectorAll("#rotatingImgs img");
const bottomBoxes = document.querySelectorAll(".bottomBox");

function changeCursor(elements) {
  if (elements.length > 1) {
    elements.forEach((element) => {
      element.addEventListener("mouseenter", enterCursor);
      element.addEventListener("mouseleave", leaveCursor);
    });
  } else {
    elements.addEventListener("mouseenter", enterCursor);
    elements.addEventListener("mouseleave", leaveCursor);
  }
}
changeCursor(navLinks);
changeCursor(scrollerArrow);
changeCursor(cards);
changeCursor(footer);
changeCursor(rotatingImgs);
changeCursor(bottomBoxes);

// For Main Background
gsap.to("#main", {
  backgroundColor: "#000",
  duration: 2,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top 0%",
    end: "top -30%",
    scrub: 2,
  },
});

//  For nav
const nav = document.querySelector("#nav");

gsap.to(nav, {
  backgroundColor: "black",
  height: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

// aboutUs
gsap.from("#aboutUs img, .aboutUs-content", {
  y: 80,
  duration: 2,
  scrollTrigger: {
    trigger: "#aboutUs",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 4,
  },
});

// Assigning backgroundImage to Cards
cards.forEach((card, index) => {
  card.style.backgroundImage = `url(media/cards/card${index + 1}.avif)`;
});

// For Tilting Cards
const cardsContainer = document.querySelector("#cardsContainer");

cardsContainer.addEventListener("mousemove", (e) => {
  const cardsConDet = cardsContainer.getBoundingClientRect();
  const { width, bottom, top } = cardsConDet;
  const rotateX = gsap.utils.mapRange(top, bottom, 5, -5, e.y);
  const rotateY = gsap.utils.mapRange(0, width, -10, 10, e.x);
  cards.forEach((card) => {
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 1.5,
    });
  });
});

// For rotating Images
gsap.to("#rotatingImgs-scroller-wrapper", {
  x: "-368%",
  duration: 60,
  delay: 1,
  yoyo: true,
  repeat: -1,
});

// For both quotes
gsap.from(".quote-left", {
  y: -50,
  x: -50,
  scrollTrigger: {
    trigger: ".quote-left",
    scroller: "body",
    start: "top 90%",
    end: "top 85%",
    scrub: 4,
  },
});

gsap.from(".quote-right", {
  y: 50,
  x: 50,
  scrollTrigger: {
    trigger: ".quote-right",
    scroller: "body",
    start: "top 110%",
    end: "top 105%",
    scrub: 4,
  },
});

// For moving (changing Text)
const changingTxt = document.querySelector("#changingTxts");

changingTxt.addEventListener("mousemove", (e) => {
  const { width, top, bottom } = changingTxt.getBoundingClientRect();
  const positionX = gsap.utils.mapRange(0, width, -10, 10, e.x);
  const positionY = gsap.utils.mapRange(top, bottom, -10, 10, e.y);
  gsap.to(".changingPara", {
    x: positionX,
    y: positionY,
    ease: Power1,
    duration: 1,
  });
});

// For moving quotes when the text changes
function transformQuotes() {
  gsap.to(".quote-left", {
    y: 30,
    x: 30,
    repeat: 1,
    yoyo: true,
  });

  gsap.to(".quote-right", {
    y: -30,
    x: -30,
    repeat: 1,
    yoyo: true,
  });
}

// For changing Text
const changingParas = document.querySelectorAll(".changingPara");
let changingIndex = 1;

setTimeout(() => {
  setInterval(() => {
    for (const para of changingParas) {
      gsap.to(para, {
        opacity: 0,
      });
    }

    if (changingIndex < 5) {
      gsap.to(changingParas[changingIndex], {
        opacity: 1,
      });
    } else {
      changingIndex = 0;
      gsap.to(changingParas[0], {
        opacity: 1,
      });
    }
    transformQuotes();

    changingIndex++;
  }, 6000);
}, 2000);

// For bottom
bottomBoxes.forEach((box, index) => {
  box.style.backgroundImage = `url(media/bottom/bottom${index + 1}.avif)`;
  box.addEventListener("mouseenter", () => {
    gsap.to("#bottom h3", {
      ["-webkit-text-stroke-color"]: "#b1eb12",
    });
  });
  box.addEventListener("mouseleave", () => {
    gsap.to("#bottom h3", {
      ["-webkit-text-stroke-color"]: "white",
    });
  });
});

// For bottom text
gsap.from("#bottom h3", {
  y: 80,
  scrollTrigger: {
    trigger: "#bottom",
    scroller: "body",
    start: "top 90%",
    end: "top 80%",
    scrub: 4,
  },
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
