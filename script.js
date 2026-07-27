const track = document.querySelector('.carousel-track');
const slides = Array.from(track?.children || []);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  if (!track) return;
  const slideWidth = slides[0]?.getBoundingClientRect().width || 0;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  if (prevButton) {
    prevButton.disabled = currentIndex === 0;
    prevButton.classList.toggle('disabled', currentIndex === 0);
  }
  if (nextButton) {
    nextButton.disabled = currentIndex === slides.length - 1;
    nextButton.classList.toggle('disabled', currentIndex === slides.length - 1);
  }
}

function showPrev() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  updateCarousel();
}

function showNext() {
  if (currentIndex >= slides.length - 1) return;
  currentIndex += 1;
  updateCarousel();
}

prevButton?.addEventListener('click', showPrev);
nextButton?.addEventListener('click', showNext);
window.addEventListener('resize', updateCarousel);

updateCarousel();
