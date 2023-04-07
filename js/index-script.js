const animatedElements = document.querySelectorAll('.animated-element');

window.addEventListener('scroll', () => {
  animatedElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight) {
      element.classList.add('animate__animated', 'animate__bounceIn');
    }
  });
});




