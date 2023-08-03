//rating

const stars = document.querySelectorAll(".stars_y i");

stars.forEach((star, k) => {
  star.addEventListener("click", () => {
    stars.forEach((star, l) => {
      k >= l ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
