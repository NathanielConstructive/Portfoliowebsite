// Animierte Übergänge
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    document.getElementById('feedback').textContent = `Danke für Ihre Nachricht, ${name}. Ich werde mich bald bei Ihnen melden!`;
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Sende das Formular an EmailJS
    emailjs.sendForm('service_6yelz19', 'template_co9hwg9', this)
    .then(function() {
        document.getElementById('feedback').textContent = "E-Mail erfolgreich gesendet!";
    }, function(error) {
        document.getElementById('feedback').textContent = "E-Mail konnte nicht gesendet werden.";
    });

    // Formular zurücksetzen
    this.reset();
});

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
        if (toggleSwitch.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
