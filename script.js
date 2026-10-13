document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav-button');
  const heroCard = document.querySelector('.hero-card');

  if (navButton) {
    navButton.addEventListener('mouseenter', () => {
      navButton.style.transform = 'translateY(-2px) scale(1.02)';
    });

    navButton.addEventListener('mouseleave', () => {
      navButton.style.transform = 'translateY(0) scale(1)';
    });
  }

  if (heroCard) {
    heroCard.addEventListener('mousemove', (event) => {
      const rect = heroCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }
});
