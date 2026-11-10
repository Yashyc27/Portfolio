document.documentElement.classList.add('js');

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-site-nav]');

function setMenu(open, returnFocus = false) {
  if (!menuButton || !menu) return;
  menu.dataset.open = String(open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menuButton.textContent = open ? 'Close' : 'Menu';
  if (returnFocus) menuButton.focus();
}

if (menuButton && menu) {
  setMenu(false);
  menuButton.addEventListener('click', () => setMenu(menu.dataset.open !== 'true'));

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('pointerdown', (event) => {
    if (menu.dataset.open === 'true' && !menu.contains(event.target) && !menuButton.contains(event.target)) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.dataset.open === 'true') setMenu(false, true);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setMenu(false);
  }, { passive: true });
}

const hero = document.querySelector('main > section:first-of-type');
if (hero && !hero.querySelector('.hero-enter')) hero.dataset.enter = 'true';

const revealSections = document.querySelectorAll('main > section:not(:first-of-type)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window && revealSections.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.dataset.revealed = 'true';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

  revealSections.forEach((section) => {
    section.dataset.reveal = 'true';
    revealObserver.observe(section);
  });
  document.documentElement.classList.add('has-reveal');
}

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const status = document.querySelector('[data-copy-status]');

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      if (status) status.textContent = 'Email copied to clipboard.';
    } catch {
      if (status) status.textContent = `Copy unavailable. Email: ${email}`;
    }
  });
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
