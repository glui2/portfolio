// card movement animation
const card = document.querySelector(".card");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const container = document.querySelector(".container");
const contactIcons = document.querySelector(".icon");
var counter = 0;
var isMoving = false;

// card flip animation
card.addEventListener("click", (e) => {
  isMoving = true;
  counter++;
  let frontRotation = (counter * 180) % 360;
  card.style.transition = `all 0.5s ease 0s`;
  card.style.transform = `rotateY(${frontRotation}deg)`;
  setTimeout(() => {
    isMoving = false;
  }, 500);
});

container.addEventListener("mousemove", (e) => {
  if (isMoving) return;
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// revert animation transition to none when mouse enters container
container.addEventListener("mouseenter", (e) => {
  if (isMoving) return;
  container.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  if (isMoving) return;
  container.style.transition = `all 0.5s ease`;
  container.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// contactIcons.addEventListener("mouseenter", (e) => {
//   if (isMoving) return;
//   contactIcons.style.transform = `translateZ(100px)`;
// });

// contactIcons.addEventListener("mouseleave", (e) => {
//   if (isMoving) return;
//   contactIcons.style.transform = `translateZ(0px)`;
// });
