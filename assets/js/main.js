/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* Remove menu mobile */
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);
scrollHeader();

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects;
if (typeof Swiper !== 'undefined') {
  swiperProjects = new Swiper('.projects__swiper', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    speed: 600,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
  });
}

/*=============== WORK TABS ===============*/
const workButtons = document.querySelectorAll('.work__button'),
      workContents = document.querySelectorAll('.work__content');

workButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    const targetContent = document.querySelector(target);

    // Remove active button
    workButtons.forEach(btn => btn.classList.remove('active-button'));
    button.classList.add('active-button');

    // Remove active content
    workContents.forEach(content => content.classList.remove('active-content'));
    if (targetContent) {
      targetContent.classList.add('active-content');
    }
  });
});

/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('copy-email-btn'),
      copyText = document.getElementById('copy-text');

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const email = 'ychaudhary161@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      copyBtn.innerHTML = '<i class="ri-check-line"></i> <span>Copied! ✓</span>';
      copyBtn.style.backgroundColor = 'var(--first-color)';
      copyBtn.style.color = '#fff';

      setTimeout(() => {
        copyBtn.innerHTML = '<i class="ri-file-copy-line"></i> <span id="copy-text">Copy email</span>';
        copyBtn.style.backgroundColor = '';
        copyBtn.style.color = '';
      }, 2500);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  });
}

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.innerHTML = `&#169; ${new Date().getFullYear()}`;
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 80,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};
window.addEventListener('scroll', scrollActive);
scrollActive();

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                        : scrollUpBtn.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
scrollUp();

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById('custom-cursor');

if (cursor && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const renderCursor = () => {
    // Linear interpolation for smooth cursor follow
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  // Hover states on interactive elements
  const hoverables = document.querySelectorAll('a, button, .swiper-button-prev, .swiper-button-next, .work__button, .skill-tag, .cert__card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1600,
    delay: 200,
    reset: false,
  });

  sr.reveal('.home__data', { origin: 'left', distance: '40px' });
  sr.reveal('.home__info', { origin: 'right', distance: '40px' });
  sr.reveal('.home__perfil', { origin: 'bottom', distance: '30px', delay: 300 });
  sr.reveal('.home__social', { origin: 'left', distance: '30px', delay: 450 });
  sr.reveal('.home__cv', { origin: 'right', distance: '30px', delay: 450 });
  sr.reveal('.about__perfil', { origin: 'left' });
  sr.reveal('.about__data', { origin: 'right' });
  sr.reveal('.projects__container');
  sr.reveal('.work__buttons', { distance: '30px' });
  sr.reveal('.work__card', { interval: 120, origin: 'bottom' });
  sr.reveal('.services__card', { interval: 100, origin: 'bottom' });
  sr.reveal('.cert__card', { interval: 80, origin: 'bottom' });
  sr.reveal('.contact__data', { origin: 'left' });
  sr.reveal('.contact__cta-box', { origin: 'right' });
  sr.reveal('.footer__container', { origin: 'bottom' });
}
