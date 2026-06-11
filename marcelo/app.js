const setupIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const setupReveal = () => {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
};

const setupBeforeAfter = () => {
  document.querySelectorAll('[data-before-after]').forEach((slider) => {
    const image = slider.dataset.image;
    const range = slider.querySelector('.ba-range');

    slider.style.setProperty('--ba-image', `url("${image}")`);

    const update = () => {
      slider.style.setProperty('--pos', `${range.value}%`);
    };

    range.addEventListener('input', update);
    update();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupIcons();
  setupReveal();
  setupBeforeAfter();
});
