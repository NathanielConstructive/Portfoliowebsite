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


const form = document.getElementById('form'); // Das Formular-Element auswählen
const result = document.getElementById('result'); // Das Ergebnis-Element auswählen

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Standardverhalten des Formulars verhindern
  const formData = new FormData(form); // Formulardaten erfassen
  const object = Object.fromEntries(formData); // Formulardaten in ein Objekt umwandeln
  const json = JSON.stringify(object); // Objekt in JSON umwandeln
  result.innerHTML = "Please wait..."; // Benutzer über den Fortschritt informieren

  fetch('https://api.web3forms.com/submit', { // Daten an die API senden
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // JSON-Typ für die Anfrage
      'Accept': 'application/json' // Erwartete Antwort im JSON-Format
    },
    body: json // JSON-Daten im Anfragekörper
  })
  .then(async (response) => {
    let json = await response.json(); // Antwort als JSON parsen
    if (response.status == 200) {
      result.innerHTML = "Form submitted successfully"; // Erfolgreiche Übermittlung
    } else {
      console.log(response); // Fehlerdetails im Konsolenprotokoll
      result.innerHTML = json.message; // Fehlermeldung anzeigen
    }
  })
  .catch(error => {
    console.log(error); // Fehler im Konsolenprotokoll
    result.innerHTML = "Something went wrong!"; // Allgemeine Fehlermeldung anzeigen
  })
  .then(function() {
    form.reset(); // Formular zurücksetzen
    setTimeout(() => {
      result.style.display = "none"; // Ergebnis nach 3 Sekunden ausblenden
    }, 3000);
  });
});

