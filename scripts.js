const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});
