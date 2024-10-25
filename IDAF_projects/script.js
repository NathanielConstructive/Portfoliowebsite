document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Setze das aktuelle Thema
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }

    // Wechsle das Thema bei Klick auf den Toggle-Schalter
    toggleSwitch.addEventListener('change', function() {
        const newTheme = toggleSwitch.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        document.querySelectorAll('nav, #home, #portfolio, #contact, footer, .project')
            .forEach(el => el.setAttribute('data-theme', newTheme));
        localStorage.setItem('theme', newTheme);
    });
});

// Animierte Übergänge
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});