if (window.location.href.indexOf('https://pikayutmg.github.io/redirect/ban.html') === -1) {
    var redirectURL = 'https://pikayutmg.github.io/redirect/ban.html'; // Remplacez par l'URL de la page de redirection

    // Fonction pour obtenir l'adresse IP du visiteur
    function getVisitorIP() {
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var visitorIP = data.ip;

                // Charger la liste d'adresses IP bannies depuis le fichier JSON
                fetch('https://enesGP.github.io/ban.json') // Mettez le lien complet vers votre fichier JSON
                    .then(response => response.json())
                    .then(data => {
                        var bannedIPs = data.bannedIPs;

                        if (bannedIPs.includes(visitorIP)) {
                            window.location.href = redirectURL;
                        }
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    }

    // Appelez la fonction pour obtenir l'adresse IP du visiteur
    getVisitorIP();
}
