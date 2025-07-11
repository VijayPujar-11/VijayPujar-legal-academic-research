// Flip card effect
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tag = btn.getAttribute("data-tag").toLowerCase();

    cards.forEach((card) => {
      const cardTags = card.getAttribute("data-tags").toLowerCase();
      if (tag === "all" || cardTags.includes(tag)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
