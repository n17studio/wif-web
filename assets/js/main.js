/* WIF — interacciones globales */
(function () {
  // --- Mobile nav toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Hide header on scroll down / scroll progress ---
  var header = document.querySelector('.site-header');
  var progress = document.querySelector('.scroll-progress');
  var lastY = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (header) header.classList.toggle('hidden', y > lastY && y > 240 && !nav.classList.contains('open'));
    lastY = y;
    if (progress) {
      var h = document.documentElement;
      progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    }
  }, { passive: true });

  // --- Reveal on scroll ---
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.fade').forEach(function (el) { io.observe(el); });

  // Hero reveals immediately
  window.addEventListener('load', function () {
    document.querySelectorAll('.page-hero .fade').forEach(function (el) { el.classList.add('in'); });
  });

  // --- Contact form (demo, no backend) ---
  var form = document.querySelector('form[data-demo]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) { note.hidden = false; note.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  }
})();
