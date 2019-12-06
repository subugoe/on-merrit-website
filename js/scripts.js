// initialise foundation specific js
$(document).foundation();

// add target blank to links pointing to external URLs
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr({
  target: '_blank',
  rel: 'noopener'
});
