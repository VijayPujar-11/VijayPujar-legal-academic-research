// Flip card on click
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
    // Toggle active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selectedTag = btn.getAttribute("data-tag").toLowerCase();

    cards.forEach((card) => {
      const cardTags = card.getAttribute("data-tags").toLowerCase();
      const isVisible = selectedTag === "all" || cardTags.includes(selectedTag);
      card.style.display = isVisible ? "block" : "none";
    });
  });
});
