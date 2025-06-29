document.addEventListener('DOMContentLoaded', function() {
    // Get links by class name
    let links = document.querySelectorAll('#hright a');
    // Add click event listeners to each link
    links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Determine the section ID from the clicked link's class
        let sectionId = link.classList[0]
                        .replace('one', 'About')
                        .replace('two', 'skills')
                        .replace('three', 'Project')
                        .replace('four', 'Contact');
                        
        // Scroll to the target section
        let targetSection = document.getElementById(sectionId);
        if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    });
});


function redirectToWhatsApp() {
    // WhatsApp number with country code and message
    var phoneNumber = "+9779812705820";
    var message = "Hello, I'm interested in getting in touch.";

    // Encode message for URL
    var encodedMessage = encodeURIComponent(message);

    // Construct WhatsApp URL
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}

// For Gmail
// document.getElementById("gmail-logo").onclick = function() {
//     window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=new&to=the.ram.bhatt@gmail.com";
// };
document.getElementById("gmail-logo").onclick = function() {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=the.ram.bhatt@gmail.com";
};

// for Problem Solver

document.addEventListener('DOMContentLoaded', function() {
    const text = "Problem Solver";
    const element = document.getElementById('problemSolver');
    // Function to output each character one by one
    function typeWriter(text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() { typeWriter(text, i); }, 150); // Adjust the delay (in milliseconds) here
    } else {
        // Clear the "Problem Solver" text and start again after a short delay
        setTimeout(function() {
        element.innerHTML = ""; 
        typeWriter(text, 0);
        }, 1000); // Delay before starting the process again
    }
    }
    // Start typing when the page loads
    typeWriter(text, 0);
});