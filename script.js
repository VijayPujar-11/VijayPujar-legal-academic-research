// Wait for DOM content to fully load
window.addEventListener("DOMContentLoaded", () => {
  // Hide loader
  const loaderWrapper = document.querySelector(".loader-wrapper");
  if (loaderWrapper) loaderWrapper.style.display = "none";

  // Animate content on load
  document.querySelectorAll(".fade-in, .fade-in-up").forEach(el => {
    el.classList.add("animate");
  });

  // Flip card on click
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Filter logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tag = btn.getAttribute("data-tag").toLowerCase();
      cards.forEach(card => {
        const tags = card.getAttribute("data-tags").toLowerCase();
        const visible = tag === "all" || tags.includes(tag);
        card.style.display = visible ? "block" : "none";
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
      const visible = title.includes(q) || tags.includes(q);
      card.style.display = visible ? "block" : "none";
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
      document.body.style.overflow = "hidden";
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    viewer.src = "";
    document.body.style.overflow = "auto";
  });
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      viewer.src = "";
      document.body.style.overflow = "auto";
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
    div.className = "blog-post fade-in-up";
    div.innerHTML = `<h3>${t}</h3><p>${c}</p>`;
    blogList.prepend(div);
    blogTitle.value = "";
    blogContent.value = "";

    // Animate the new post
    requestAnimationFrame(() => {
      div.classList.add("animate");
    });
  });

  // ✅ Animate emojis on scroll
  const emojis = document.querySelectorAll(".emoji");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Run once only
      }
    });
  }, { threshold: 0.5 });

  emojis.forEach(e => observer.observe(e));
});
