import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const check = () => {
    if (window.scrollY > 80) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  };
  window.addEventListener('scroll', check, { passive: true });
  check();
}

function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('[data-hero-eyebrow]', {
    opacity: 0, x: -30, duration: 0.8, delay: 0.3,
  })
  .from('[data-hero-title]', {
    opacity: 0, y: 40, duration: 0.9,
  }, '-=0.5')
  .from('[data-hero-subtitle]', {
    opacity: 0, y: 20, duration: 0.7,
  }, '-=0.5')
  .from('[data-hero-desc]', {
    opacity: 0, y: 20, duration: 0.7,
  }, '-=0.4')
  .from('[data-hero-buttons]', {
    opacity: 0, y: 20, duration: 0.6,
  }, '-=0.3')
  .from('[data-hero-stats]', {
    opacity: 0, y: 20, duration: 0.6,
  }, '-=0.2')
  .from('[data-hero-photo]', {
    opacity: 0, scale: 0.95, duration: 1,
  }, '-=0.8');
}

function initScrollAnimations() {
  document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  document.querySelectorAll('[data-animate="fade-left"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0, x: -60, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  document.querySelectorAll('[data-animate="fade-right"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0, x: 60, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  document.querySelectorAll('[data-animate="scale-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0, scale: 0.9, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });
}

function initStaggerAnimations() {
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    gsap.from(group.children, {
      opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: group, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroAnimations();
  initScrollAnimations();
  initStaggerAnimations();
});
