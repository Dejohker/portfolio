function filterProjects(type, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.display =
      type === "all" || card.dataset.type === type ? "block" : "none";
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) return;
  const msg = document.getElementById("form-msg");
  msg.style.display = "block";
  document.getElementById("contact-form").reset();
  setTimeout(() => (msg.style.display = "none"), 5000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll("section").forEach((s) => {
  s.style.opacity = 0;
  s.style.transform = "translateY(24px)";
  s.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(s);
});
