// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Settings dropdown
function toggleSettings() {
  document.getElementById("settingsDropdown").classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.settings-button')) {
      var dropdowns = document.getElementsByClassName("settings-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
  
  // Close modal when clicking outside
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Image slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');

function showSlides() {
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  showSlides();
}

// Auto-advance slides every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Accordion
function toggleAccordion(element) {
  element.classList.toggle("active");
  const content = element.nextElementSibling;
  
  if (element.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("show");
  } else {
      content.style.maxHeight = "0";
      content.classList.remove("show");
  }
}

// Form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // In a real application, you would send this data to a server
  console.log(`Form submitted: ${name}, ${email}, ${message}`);
  
  // Show notification
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  
  // Hide notification after 3 seconds
  setTimeout(() => {
      notification.classList.remove('show');
  }, 3000);
  
  // Reset form
  event.target.reset();
}

// Scroll indicator
window.onscroll = function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  // Update scroll indicator width
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollIndicator.style.width = scrolled + "%";
  
  // Show/hide scroll to top button
  if (winScroll > 300) {
      scrollToTopBtn.style.display = "flex";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Placeholder functions for settings actions
function toggleLanguage() {
  alert("Language settings clicked!");
}

function toggleNotifications() {
  alert("Notification settings clicked!");
}

function openProfile() {
  alert("Profile settings clicked!");
}

function openAccount() {
  alert("Account settings clicked!");
}

// Card animation
function animateCard() {
  const card = document.getElementById('animate-card');
  card.style.transition = "all 0.5s ease";
  
  // Apply random transformations
  const randomRotate = Math.floor(Math.random() * 360);
  const randomScale = 0.8 + Math.random() * 0.4;
  
  card.style.transform = `rotate(${randomRotate}deg) scale(${randomScale})`;
  
  // Reset after animation
  setTimeout(() => {
      card.style.transform = "translateY(0) rotate(0) scale(1)";
  }, 1000);
}

// Confetti animation
function celebrateClick() {
  const canvas = document.getElementById('confetti-canvas');
  canvas.style.display = 'block';
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confetti = [];
  const colors = ['#6c63ff', '#ff6584', '#45b8ea', '#42d6a4', '#ffeb3b'];
  
  // Create confetti particles
  for (let i = 0; i < 100; i++) {
      confetti.push({
          x: Math.random() * canvas.width,
          y: -20,
          size: 10 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 2 + Math.random() * 3,
          angle: Math.random() * 6.28
      });
  }
  
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let particlesStillFalling = false;
      
      confetti.forEach(particle => {
          ctx.fillStyle = particle.color;
          
          particle.y += particle.speed;
          particle.x += Math.sin(particle.angle) * 2;
          particle.angle += 0.02;
          
          if (particle.y < canvas.height) {
              particlesStillFalling = true;
          }
          
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
      
      if (particlesStillFalling) {
          requestAnimationFrame(animate);
      } else {
          setTimeout(() => {
              canvas.style.display = 'none';
          }, 500);
      }
  }
  
  animate();
}

// Add animation to cards when they come into view
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Initialize the first accordion item as open
document.addEventListener('DOMContentLoaded', function() {
  const firstAccordionHeader = document.querySelector('.accordion-header');
  if (firstAccordionHeader) {
      toggleAccordion(firstAccordionHeader);
  }
});