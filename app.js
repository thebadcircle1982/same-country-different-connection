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
  let copied = false;

  message.focus();
  message.select();
  message.setSelectionRange(0, message.value.length);

  try {
    copied = document.execCommand('copy');
  } catch (error) {
    copied = false;
  }

  if (!copied && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(message.value);
      copied = true;
    } catch (error) {
      copied = false;
    }
  }

  if (copied) {
    status.textContent = 'Message copied. Personalize it before sending.';
    copyButton.textContent = 'Copied';
  } else {
    status.textContent = 'Copy failed. Select the message and copy it manually.';
  }

  setTimeout(() => {
    copyButton.textContent = 'Copy message';
  }, 1800);
});
