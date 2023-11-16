

// Fonction pour vérifier la présence de l'élément avec l'ID "5555" dans l'iframe
function checkIframeContent() {
    // Récupérer l'élément iframe par son ID
    var iframe = document.getElementById('5555');

    // Vérifier si l'iframe existe et contient l'élément avec l'ID "5555"
    if (iframe && iframe.contentDocument && iframe.contentDocument.getElementById('5555')) {
        console.log("L'utilisateur peut rester sur la page car l'élément avec l'ID '5555' est présent dans l'iframe.");
    } else {
        // Rediriger l'utilisateur vers https://pikayutmg.github.io seulement si le site autorisé n'est pas présent
        var siteAutorise = "http://192.168.1.124:8080/index.php"; // Remplacez par le site autorisé
        if (window.location.href !== siteAutorise) {
            console.log("Redirection vers https://pikayutmg.github.io");
            window.location.href = "https://pikayutmg.github.io/redirect/beta.html";
        } else {
            console.log("L'utilisateur peut rester sur la page car le site autorisé est présent.");
        }
    }
}

// Appeler la fonction au chargement de la page
window.onload = checkIframeContent;

