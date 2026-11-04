const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('is-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const copyButton = document.querySelector('#copy-message');
const message = document.querySelector('#message-template');
const status = document.querySelector('#copy-status');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = 'Message copied. Personalize it before sending.';
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy message'; }, 1800);
  } catch {
    message.focus();
    message.select();
    status.textContent = 'Select and copy the message manually.';
  }
});
