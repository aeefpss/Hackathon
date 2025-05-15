const toggleBtn = document.getElementById('toggleMore');
const moreInfo = document.getElementById('moreInfo');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
  if (isExpanded) {
    moreInfo.hidden = true;
    toggleBtn.textContent = 'Saiba mais';
  } else {
    moreInfo.hidden = false;
    toggleBtn.textContent = 'Mostrar menos';
  }
});

// Dynamic greeting based on time of day
const greetSection = document.getElementById('intro');
const hour = new Date().getHours();
let greetMsg = '';
if (hour < 12) {
  greetMsg = 'Bom dia! ';
} else if (hour < 18) {
  greetMsg = 'Boa tarde! ';
} else {
  greetMsg = 'Boa noite! ';
}
const greetingPara = document.createElement('p');
greetingPara.style.fontWeight = 'bold';
greetingPara.textContent = greetMsg + 'Bem-vindo ao Viridis Vitae.';
greetSection.insertBefore(greetingPara, greetSection.firstChild);

