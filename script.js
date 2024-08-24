document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const skills = document.querySelectorAll('.skill');
    const galleryItems = document.querySelectorAll('.gallery-item');

    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
            project.style.transition = 'transform 0.2s ease';
        });

        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
        });
    });

    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'scale(1.05)';
            skill.style.transition = 'transform 0.2s ease';
        });

        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'scale(1)';
        });
    });
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
});