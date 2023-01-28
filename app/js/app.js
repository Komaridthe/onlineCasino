// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
});

const tournament = document.querySelector(".tournament__banner");
const tournamentBtn = document.querySelector(".tournament__banner-btn");
const tournamentImg = document.querySelector(".tournament__banner-img");

tournament.addEventListener("mouseover", () => {
  tournamentImg.classList.remove("slow-out");
  tournamentImg.classList.add("slow-in");
  tournamentBtn.classList.remove("btn-out");
  tournamentBtn.classList.add("btn-in");
});
tournament.addEventListener("mouseout", () => {
  tournamentImg.classList.add("slow-out");
  tournamentImg.classList.remove("slow-in");
  tournamentBtn.classList.add("btn-out");
  tournamentBtn.classList.remove("btn-in");
});
