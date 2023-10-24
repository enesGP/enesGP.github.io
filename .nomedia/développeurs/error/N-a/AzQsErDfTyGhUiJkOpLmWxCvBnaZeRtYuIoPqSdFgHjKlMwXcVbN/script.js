window.addEventListener("load", function() {
    var imageList = document.getElementById("imageList");

    for (var i = 1; i <= 500; i++) {
        // Pour chaque format d'image, générez 500 noms de fichiers
        var formats = ["jpg", "jpeg", "png", "heic"];
        
        formats.forEach(function(format) {
            var filename = `photo (${i}).${format}`;
            var imgElement = document.createElement("img");
            imgElement.src = filename;
            imgElement.alt = filename;
            imageList.appendChild(imgElement);
        });
    }
});
