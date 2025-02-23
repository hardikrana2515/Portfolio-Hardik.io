var typed = new Typed('#element', {
    strings: ['Computer Engineer.', 'Full stack Developer.', 'Video Editor.', 'Backend Developer.'],
    typeSpeed: 70,
  });

  function toggleMenu() {
    const navList = document.querySelector('.navlist');
    const hamburger = document.querySelector('.hamburger');

    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
  }

  function showDescription() {
  
  if (window.innerWidth <= 1224) {
    const skillDescription = document.querySelector('.skill-description');
    skillDescription.style.display = 'block'; 
    skillDescription.style.zIndex = 22;
}
}
function hideDescription() {
  const skillDescription = document.querySelector('.skill-description');
  skillDescription.style.display = 'none'; 
}