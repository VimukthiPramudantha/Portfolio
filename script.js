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

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.2s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
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
