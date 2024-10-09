// Toggle Burger Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Close Dropdown on Outside Click
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.dropdown-content');
  if (!e.target.matches('.dropbtn')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Show/Hide Dropdown
const dropBtn = document.querySelector('.dropbtn');
dropBtn.addEventListener('click', () => {
  document.querySelector('.dropdown-content').classList.toggle('show');
});
