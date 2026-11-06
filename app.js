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
  const messageText = message.value;

  try {
    await navigator.clipboard.writeText(messageText);
    status.textContent = 'Message copied. Personalize it before sending.';
    copyButton.textContent = 'Copied';
  } catch (error) {
    message.focus();
    message.select();
    message.setSelectionRange(0, message.value.length);

    const copied = document.execCommand('copy');

    if (copied) {
      status.textContent = 'Message copied. Personalize it before sending.';
      copyButton.textContent = 'Copied';
    } else {
      status.textContent = 'Please select and copy the message manually.';
    }
  }

  setTimeout(() => {
    copyButton.textContent = 'Copy message';
  }, 1800);
});
