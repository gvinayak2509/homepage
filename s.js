// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide() {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[currentSlide].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }
  
    setInterval(nextSlide, 3000);
  
    const ratingStars = document.getElementById('ratingStars');
    const stars = ratingStars.getElementsByTagName('input');
    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener('mouseover', function() {
        for (let j = 0; j <= i; j++) {
          stars[j].classList.add('highlight');
        }
      });
  
      stars[i].addEventListener('mouseout', function() {
        for (let j = 0; j <= i; j++) {
          stars[j].classList.remove('highlight');
        }
      });
    }
  
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const reviewText = document.querySelector('textarea[name="reviewText"]').value;
      const customerName = document.querySelector('input[name="customerName"]').value;

      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <h3>Rating: ${rating} stars</h3>
        <p>${reviewText}</p>
        <p>Customer Name: ${customerName}</p>
      `;
  
      const reviewContainer = document.getElementById('reviewContainer');
      reviewContainer.appendChild(reviewElement);
  
      document.getElementById('reviewForm').reset();
    });
  });
  
 