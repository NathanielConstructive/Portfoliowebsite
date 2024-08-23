
document.addEventListener("DOMContentLoaded", function() {
    // Beispielhafte interaktive Funktionalität
    const projects = document.querySelectorAll('.projekt');
    
    projects.forEach((project) => {
        project.addEventListener('click', function() {
            alert('Mehr Informationen zu ' + this.querySelector('h3').innerText);
        });
    });
});
