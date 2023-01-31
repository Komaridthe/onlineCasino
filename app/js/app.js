import Swiper from "swiper";

new Swiper(".landingGames__swiper-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".providers-swiper-button-next",
    prevEl: ".providers-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    380: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    730: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".newGames-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".newGames-swiper-button-next",
    prevEl: ".newGames-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    380: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    730: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".liveRTP-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".newGames-swiper-button-next",
    prevEl: ".newGames-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    380: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    730: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".selectorChoice-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".newGames-swiper-button-next",
    prevEl: ".newGames-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    380: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    730: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".popularGames-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".newGames-swiper-button-next",
    prevEl: ".newGames-swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    380: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    730: {
      slidesPerView: 5,
    },
  },
});
// =============================
$(function () {
  $(".header__inner-menuBurger").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
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

document.querySelectorAll(".casinoInfo__wrapper").forEach((section) => {
  section.onbeforematch = () => {
    section.classList.remove("collapsed");
  };
  document.querySelector(".casinoInfo__showMore-btn").onclick = () => {
    section.classList.toggle("collapsed");

    const details = document.querySelector(".collapsedBlock");
    const button = document.querySelector(".casinoInfo__showMore-btn");
    if (section.classList.contains("collapsed")) {
      details.hidden = "until-found";
      button.innerText = "Показать больше";
    } else {
      details.removeAttribute("hidden");
      button.innerText = "Скрыть информацию";
    }
  };
});

document.querySelectorAll(".mobileNav__block-item").forEach((section) => {
  section.onmouseenter = () => {
    section.classList.toggle("wight");
  };
  section.onmouseleave = () => {
    section.classList.remove("wight");
  };
});
