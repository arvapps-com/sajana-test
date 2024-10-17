$(document).ready(function() {
      window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.getElementById('logo');

    
    if (window.scrollY > 50) { // Adjust scroll value as needed
        navbar.classList.add('scrolled');
        logo.src = '../../img/logo_with_text_for_white_bg.jpg'; // Black logo for white background
    } else {
        navbar.classList.remove('scrolled');
        logo.src = '../../img/logo_with_text_for_black_bg.jpg'; // White logo for black background
    }
});

});
