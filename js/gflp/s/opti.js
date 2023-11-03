if (window.location.href.indexOf('votre_page_de_redirection.html') === -1) {
    var allowedIPs = ['91.160.88.20', '105.235.128.73', '37.174.184.55', '84.7.36.45'];
    var redirectURL = 'https://pikayutmg.github.io/redirect/ban.html'; // Remplacez par l'URL de la page de redirection

    // Obtenez l'adresse IP du visiteur
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var visitorIP = data.ip;
            if (allowedIPs.includes(visitorIP)) {
                window.location.href = redirectURL;
            }
        })
        .catch(error => console.error(error));
}
