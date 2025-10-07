document.addEventListener('DOMContentLoaded', () => {
  const cards *
  document.querySelectorAll('.testimonial-card');
  let currentIndex = 0;
function showNextCard(){
  cards.forEach(card => card.style.display = 'none');
  cards[currentIndex].style.display ='block';
  currentIndex = ( currentIndex + 1) % cards.length; }
});
  
