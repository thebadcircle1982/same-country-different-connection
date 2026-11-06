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

const emailButton = document.querySelector('#open-email');
const message = document.querySelector('#message-template');

emailButton?.addEventListener('click', () => {
  const subject = 'Support equal access to reliable high-speed Internet';
  const body = message.value.replace(
    'Subject: Support equal access to reliable high-speed Internet\n\n',
    ''
  );

  const emailLink =
    'mailto:?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  window.location.href = emailLink;
});
