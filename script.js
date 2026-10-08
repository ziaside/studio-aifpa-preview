const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const menuLinks = [...primaryNav.querySelectorAll('a')];

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '메뉴 열기');
  primaryNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  primaryNav.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
});

const gallery = document.querySelector('.work-gallery');
document.querySelectorAll('.gallery-button').forEach((button) => {
  button.addEventListener('click', () => {
    const card = gallery.querySelector('.work-card');
    const distance = card.getBoundingClientRect().width + 20;
    gallery.scrollBy({ left: distance * Number(button.dataset.direction), behavior: 'smooth' });
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 50px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        const current = link.getAttribute('href') === `#${entry.target.id}`;
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((section) => sectionObserver.observe(section));
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
    document.querySelector('.scroll-progress').style.width = `${progress}%`;
    document.querySelector('.site-header').classList.toggle('is-scrolled', window.scrollY > 20);
    scrollTicking = false;
  });
}, { passive: true });

document.querySelector('#year').textContent = String(new Date().getFullYear());
