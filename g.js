// Hide the SVG after 5 seconds and show the contact page
setTimeout(function() {
    document.getElementById('phoneSvg').classList.add('hidden');
    document.getElementById('contactPage').style.opacity = '1';
    document.getElementById('contactPage').style.visibility = 'visible';
}, 2000);

// EmailJS form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    emailjs.sendForm('service_btms38p', 'template_0tdktdp', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
});



document.addEventListener("DOMContentLoaded", function() {
    const svgElement = document.getElementById('phoneSvg');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // Set the duration of the SVG animation
    const animationDuration = 2000; // 5 seconds (adjust according to your SVG animation duration)

    // Use setTimeout to wait for the SVG animation to finish
    setTimeout(() => {
        // Remove the hidden class to show the header, main, and footer
        header.classList.remove('hidden');
        main.classList.remove('hidden');
        footer.classList.remove('hidden');

        // Optionally hide the SVG after the animation is done
        svgElement.style.display = 'none';
    }, animationDuration);
});
