function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission  
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value, // Changed ID to use underscore
    subject: document.getElementById("subject").value,
    message: document.getElementById("your_message").value  // Changed ID to use underscore
  };

  emailjs.send("service_c7z034z", "template_em5s0bh", parms)
    .then(function(response) {
      alert("Email sent successfully!");
    })
    .catch(function(error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    });
}

  let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href* = ' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}