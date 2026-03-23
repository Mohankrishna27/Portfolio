document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animatedElements = document.querySelectorAll(
        '.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in'
    );

    // Add elements to the observer
    animatedElements.forEach(el => observer.observe(el));

    // Trigger animations for elements initially in viewport to avoid flashes
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('is-visible');
            }
        });
    }, 150);
});
