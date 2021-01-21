const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitchToggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  event.preventDefault();

  if (themeSwitchToggleRef.checked) {
    bodyRef.classList.add('dark-theme');
    return;
  }

  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
}
