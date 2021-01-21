const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeSwitchToggleRef.addEventListener('change', changeTheme);

function changeTheme() {
  event.preventDefault();

  if (themeSwitchToggleRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    window.localStorage.setItem('theme', Theme.DARK);
    return;
  }

  bodyRef.classList.remove(Theme.DARK);
  bodyRef.classList.add(Theme.LIGHT);
  window.localStorage.setItem('theme', Theme.LIGHT);
}

const savedThema = window.localStorage.getItem('theme');

if (savedThema === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  window.localStorage.setItem('theme', Theme.DARK);
  themeSwitchToggleRef.checked = true;
}
