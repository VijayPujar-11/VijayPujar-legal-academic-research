document.addEventListener("DOMContentLoaded", () => {
  // Flip card on click
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });

  // Tag filter functionality
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const tag = button.getAttribute('data-tag');
      document.querySelectorAll('.card').forEach(card => {
        const tags = card.getAttribute('data-tags') || "";
        if (tag === 'all' || tags.toLowerCase().includes(tag.toLowerCase())) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
