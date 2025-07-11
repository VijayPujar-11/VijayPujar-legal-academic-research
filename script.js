// Flip card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

// Filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const tag = btn.getAttribute("data-tag");
    cards.forEach(card => {
      const ct = card.getAttribute("data-tags").toLowerCase();
      card.style.display = (tag === "all" || ct.includes(tag.toLowerCase())) ? "block" : "none";
    });
  });
});

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.getAttribute("data-tags").toLowerCase();
    card.style.display = (title.includes(q) || tags.includes(q)) ? "block" : "none";
  });
});

// PDF modal logic
const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const closeBtn = document.querySelector(".close-btn");
document.querySelectorAll(".open-pdf").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    viewer.src = link.getAttribute("data-pdf");
    modal.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => { modal.style.display = "none"; viewer.src = ""; });
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    viewer.src = "";
  }
});

// Blog-post editor
const blogList = document.getElementById("blogList");
const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");
const addBlogBtn = document.getElementById("addBlogBtn");
addBlogBtn.addEventListener("click", () => {
  const t = blogTitle.value.trim();
  const c = blogContent.value.trim();
  if (!t || !c) return;
  const div = document.createElement("div");
  div.className = "blog-post";
  div.innerHTML = `<h3>${t}</h3><p>${c}</p>`;
  blogList.prepend(div);
  blogTitle.value = "";
  blogContent.value = "";
});
