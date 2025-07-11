// Flip card on click
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });

  // Filter logic
  const filterLinks = document.querySelectorAll(".filter-bar a");
  const cards = document.querySelectorAll(".card");

  filterLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      // Remove active class
      filterLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      cards.forEach(card => {
        const tags = card.getAttribute("data-tags");
        if (filter === "all" || tags.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
