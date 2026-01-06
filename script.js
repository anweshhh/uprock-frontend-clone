const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
