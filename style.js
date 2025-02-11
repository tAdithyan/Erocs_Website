// Add CSS dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .navbar {
    display: flex;
  }

  @media (max-width: 1200px) { /* Updated from 768px */
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
    
    /* Hamburger menu styles */
    .hamburger {
      display: block;
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      cursor: pointer;
      background: none;
      border: none;
    }
    
    .hamburger span {
      display: block;
      width: 30px;
      height: 3px;
      margin: 6px auto;
      background: white;
      transition: all 0.3s ease-in-out;
    }

    /* Cross Icon when active */
    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
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
    