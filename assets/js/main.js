// EMY - Interactions & animations

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky header shadow on scroll ---
  const header = document.querySelector('.header');
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          const item = link.closest('.nav__item');
          const hasSubmenu = item && item.querySelector('.submenu');
          if (hasSubmenu) {
            e.preventDefault();
            item.classList.toggle('is-active');
          } else {
            nav.classList.remove('is-open');
          }
        }
      });
    });
  }

  // --- Reveal on scroll ---
  const revealElements = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealElements.forEach(el => io.observe(el));

  // --- Animated counters ---
  const counters = document.querySelectorAll('[data-counter]');
  const counterIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.counter;
        const suffix = entry.target.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const value = Math.floor(target * eased);
          entry.target.textContent = value.toLocaleString('fr-FR') + suffix;
          if (p < 1) requestAnimationFrame(step);
          else entry.target.textContent = target.toLocaleString('fr-FR') + suffix;
        };
        requestAnimationFrame(step);
        counterIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterIo.observe(c));

  // --- Form submission (demo - no backend) ---
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Envoi en cours...';
      setTimeout(() => {
        btn.innerHTML = '✓ Demande envoyée ! Nous vous rappelons rapidement.';
        btn.style.background = '#10B981';
        form.reset();
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = originalText;
          btn.style.background = '';
        }, 4500);
      }, 900);
    });
  }

  // --- Active link underline on hash ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
          if (nav && nav.classList.contains('is-open')) nav.classList.remove('is-open');
        }
      }
    });
  });

});
