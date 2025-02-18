// Add CSS dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .navbar {
    display: flex;
  }

  @media (max-width: 1200px) {
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(17, 17, 17, 0.95);
      padding: 2rem;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: top;
    }
    
    .navbar.hidden {
      transform: translateY(-100%);
      opacity: 0;
    }
    
    /* Fixed hamburger menu positioning */
    .hamburger {
      display: block;
      position: fixed;
      top: 1rem;  /* Reduced from 20px */
      right: 1rem; /* Reduced from 20px */
      z-index: 1000;
      cursor: pointer;
      border: none;
      background: transparent; /* Added for better visibility */
      padding: 0.5rem;        /* Added padding for better touch target */
      width: 40px;           /* Added explicit width */
      height: 40px;          /* Added explicit height */
    }
    
    .hamburger span {
      display: block;
      width: 25px;           /* Slightly reduced from 30px */
      height: 2px;           /* Slightly reduced from 3px */
      margin: 5px auto;      /* Reduced from 6px */
      background: white;
      transition: all 0.3s ease-in-out;
      background: rgba(255, 255, 255, 0.9);
    }

    /* Cross Icon when active */
    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(-5px, -5px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;
document.head.appendChild(styleSheet);

// Add hamburger button to DOM
const hamburgerHTML = `
  <button class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </button>
`;
document.body.insertAdjacentHTML('beforeend', hamburgerHTML);

// Select elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

// Ensure correct initial state
if (window.innerWidth <= 1200) {
    navbar.classList.add('hidden');
}

// Function to toggle navbar
function toggleNavbar() {
    navbar.classList.toggle('hidden');
    hamburger.classList.toggle('active'); // Adds cross icon effect
}

// Event listeners
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNavbar();
});

// Close navbar when clicking outside
document.addEventListener('click', (event) => {
    const isClickInside = navbar.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside && window.innerWidth <= 1200 && !navbar.classList.contains('hidden')) {
        toggleNavbar();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        navbar.classList.remove('hidden');
        hamburger.classList.remove('active');
    } else {
        navbar.classList.add('hidden');
        hamburger.classList.remove('active');
    }
});





const marqueeContent = document.querySelector('.marquee-content');
const clone = marqueeContent.cloneNode(true);
document.querySelector('.marquee').appendChild(clone);



// Update function to handle click and submit events




function sendEmail(){
    Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nirmalessbee@gmail.com",
    Password: "nirmalessbbe0375",
    To: "nirmalessbee@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Us Message",
    Body: `Name: ${ document.getElementById("name").value}<br>Email: ${document.getElementById("email").value}<br>Message: ${document.getElementById("message").value}`
    }).then(
    message => alert("Message sent successfully!")
    ).catch(
    error => alert("Failed to send message: " + error)
    );
    }
    







    function toggleSection(id) {
      const section = document.getElementById(`section-${id}`);
      const icon = section.previousElementSibling.querySelector('.toggle-icon');
  
      if (section.style.maxHeight) {
          section.style.maxHeight = null;
          section.style.opacity = "0";
          icon.textContent = "+";
      } else {
          document.querySelectorAll(".service-content").forEach(content => {
              content.style.maxHeight = null;
              content.style.opacity = "0";
          });
          document.querySelectorAll(".toggle-icon").forEach(icon => {
              icon.textContent = "+";
          });
  
          section.style.maxHeight = section.scrollHeight + "px";
          section.style.opacity = "1";
          icon.textContent = "-";
      }
  }
  

    