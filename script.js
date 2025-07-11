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

    const tag = btn.getAttribute("data-tag");

    cards.forEach((card) => {
      const cardTags = card.getAttribute("data-tags");
      if (tag === "all" || cardTags.toLowerCase().includes(tag.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Search Functionality
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.getAttribute("data-tags").toLowerCase();
    if (title.includes(query) || tags.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// PDF Modal Logic
const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".open-pdf").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pdfLink = link.getAttribute("data-pdf");
    viewer.src = pdfLink;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  viewer.src = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    viewer.src = "";
  }
});
