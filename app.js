// card movement animation
const card = document.querySelector(".card");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// revert animation transition to none when mouse enters container
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// card flip animation
card.addEventListener("click", (e) => {
  if (cardBack.style.transform == "rotateY(180deg)") {
    cardBack.style.transform = `rotateY(0deg)`;
    cardFront.style.transform = `rotateY(180deg)`;
  } else {
    cardBack.style.transform = `rotateY(180deg)`;
    cardFront.style.transform = `rotateY(0deg)`;
  }
});
