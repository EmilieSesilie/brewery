const himmel = document.querySelector("#himmel");
const flowers_front = document.querySelector("#ff");
const flowers_back = document.querySelector("#fb");
const lake = document.querySelector("#lake");

window.addEventListener("scroll", () => {
  let { scrollY } = window;

  ff.style.transform = `translateX(-${scrollY / 5}px) translateY(-${
    scrollY / 3
  }px)`;

  fb.style.transform = `translateX(${scrollY / 5}px) translateY(${
    scrollY / 3
  }px)`;

  himmel.style.transform = `translateX(0px) translateY(${scrollY / 1}px)`;

  console.log(lake.style);
});

const bb1 = document.querySelector("#beer_background");
const b1 = document.querySelector("#beer1");
const p1 = document.querySelector("#text1");

document.addEventListener("mousemove", (event) => {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  bb1.style.transform = `translateX(0px) translateY(0px)`;
  b1.style.transform = `translateX(${mouseX / 100}px) translateY(${
    -mouseY / 100
  }px)`;

  console.log(sky);
});
