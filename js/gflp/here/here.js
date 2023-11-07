 
        // Cette fonction sera appelée lorsque le fichier JSON sera chargé
        function handleBanData(banData) {
            // Supposons que le fichier JSON contienne une liste d'utilisateurs bannis sous la clé "bannedUsers"
            var bannedUsers = banData.bannedUsers;
            
            // Vous pouvez vérifier si l'utilisateur actuel est banni en fonction de son identifiant ou de ses informations
            var currentUser = { /* Les données de l'utilisateur actuel */ };

            // Vérification de l'utilisateur actuel parmi les utilisateurs bannis
            var isBanned = bannedUsers.some(function(bannedUser) {
                return bannedUser.id === currentUser.id; // Vérifiez selon votre structure de données
            });

            if (isBanned) {
                // Redirigez l'utilisateur vers la page de bannissement
                window.location.href = "https://pikayutmg.github.io/redirect/ban.html";
            }
        }
  
