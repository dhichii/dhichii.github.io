export function hideSidebar() {
  document.getElementById('menu-toggle').checked  = false;
}

document.addEventListener('click', function() {
  let display;
  if (display) {
    hideSidebar();
  }
});