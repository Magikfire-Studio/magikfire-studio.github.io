const links = document.querySelectorAll('.scroolSmooth');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        try {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } catch (error) {
            console.error("Error scrolling to target:", error);
        }

    });
});