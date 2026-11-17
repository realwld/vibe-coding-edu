const sourceToggle = document.querySelector('.source-toggle');
const sourceInfo = document.querySelector('#source-info');
sourceToggle.addEventListener('click', () => {
  const expanded = sourceToggle.getAttribute('aria-expanded') === 'true';
  sourceToggle.setAttribute('aria-expanded', String(!expanded));
  sourceInfo.hidden = expanded;
  sourceToggle.querySelector('span').textContent = expanded ? '+' : '−';
});
