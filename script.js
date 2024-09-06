// Animierte Übergänge
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Einfaches Kontaktformular mit Feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Beispiel-Feedback, hier könnte eine Backend-Integration erfolgen
    document.getElementById('feedback').textContent = `Danke für Ihre Nachricht, ${name}. Ich werde mich bald bei Ihnen melden!`;
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_6yelz19', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
        document.getElementById('feedback').textContent = "E-Mail erfolgreich gesendet!";
    }, function(error) {
        document.getElementById('feedback').textContent = "E-Mail konnte nicht gesendet werden.";
    });

    this.reset();
});
