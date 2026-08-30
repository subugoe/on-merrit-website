// Mobile navigation: slide-in panel
(function() {
  var panel = document.getElementById('mobilenav');
  if (!panel) return;

  var overlay = document.querySelector('[data-overlay]');
  var openers = document.querySelectorAll('[data-toggle="mobilenav"]');
  var closers = document.querySelectorAll('[data-close]');

  function open(event) {
    event.preventDefault();
    panel.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.classList.add('is-mobilenav-open');
    openers.forEach(function(el) {
      el.setAttribute('aria-expanded', 'true');
    });
  }

  function close() {
    panel.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.classList.remove('is-mobilenav-open');
    openers.forEach(function(el) {
      el.setAttribute('aria-expanded', 'false');
    });
  }

  openers.forEach(function(el) {
    el.setAttribute('aria-expanded', 'false');
    el.setAttribute('aria-controls', 'mobilenav');
    el.addEventListener('click', open);
  });

  closers.forEach(function(el) {
    el.addEventListener('click', close);
  });

  if (overlay) {
    overlay.addEventListener('click', close);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      close();
    }
  });
})();

// add target blank to links pointing to external URLs
(function() {
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname && links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
      links[i].rel = 'noopener';
    }
  }
})();
