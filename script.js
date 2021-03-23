function hamburgerMenu(){
  const toggle= document.querySelector('.hamburger');
  const sidebar= document.querySelector('.sidebar');
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}