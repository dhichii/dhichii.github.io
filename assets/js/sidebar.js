function hideSidebar() {
  document.getElementById('menu-toggle').checked = false;
}

var sideIconToggle = document.getElementsByTagName('header');

document.addEventListener('click', function(event) {
  if (!header.contains(event.target))
    hideSidebar();
});