document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello! I'm Om Shete";
    let i = 0;
    const speed = 100; // Typing speed

    function typeWriter() {
        if (i < text.length) {
            document.querySelector(".typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});




document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, // Adjust scroll position
            behavior: 'smooth'
        });
    });
});


