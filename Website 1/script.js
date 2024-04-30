function page4Edition() {
  const elemC = document.querySelector("#elem-container");
  const imgC = document.querySelector("#fixed-image");
  const img = document.querySelector("#fixed-image img");
  const video = document.querySelector("#fixed-image video");
  const elems = document.querySelectorAll(".elem");
  elems.forEach((elem, index) => {
    elem.addEventListener("mouseenter", function () {
      const type = elem.getAttribute("data-type");
      imgC.style.display = "block";
      if (type === "video") {
        img.style.display = "none";
        video.style.display = "block";
        video.setAttribute("src", `./media/elem${index + 1}.mp4`);
      } else {
        video.style.display = "none";
        img.style.display = "block";
        img.setAttribute("src", `./media/elem${index + 1}.png`);
      }
    });
    elem.addEventListener("mouseleave", function () {
      imgC.style.display = "none";
      video.style.display = "none";
      img.style.display = "none";
    });
  });
}
page4Edition();

function page5Edition() {
  const page5Headings = document.querySelectorAll(".left-con h3");
  const active = document.querySelectorAll(".left-con");
  const para = document.querySelector("#left p");
  const page5Image = document.querySelector("#page5_right");
  active.forEach((el, index) => {
    el.addEventListener("click", function () {
      for (let i = 0; i < page5Headings.length; i++) {
        active[i].id = "";
      }
      active[index].id = "active";
      page5Image.style.background = `url(./media/page5_${index}.png) center center/cover`;

      if (index === 0) {
        para.innerText =
          "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
      } else if (index === 1) {
        para.innerText =
          "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
      } else {
        para.innerText =
          "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
      }
    });
  });
}
page5Edition();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiper();

function loader() {
  const loaderCon = document.querySelector("#loader");
  const loader1 = document.querySelector("#loader1");
  const loader2 = document.querySelector("#loader2");
  const loader3 = document.querySelector("#loader3");
}

const loaderCon = document.querySelector("#loader");
const loader1 = document.querySelector("#loader1");
const loader2 = document.querySelector("#loader2");
const loader3 = document.querySelector("#loader3");
function loader() {
    setTimeout(() => {
     setTimeout(() => {
       loader1.style.display = "block";
      }, 800);
     setTimeout(() => {
       loader1.style.display = "none";
       loader2.style.display = "block";
      }, 1400);
     setTimeout(() => {
       loader2.style.display = "none";
       loader3.style.display = "block";
     }, 2000);
     setTimeout(() => {
       loaderCon.style.height = 0;
       loader3.style.display = "none";
     }, 2400);

    }, 500);
}
loader();
