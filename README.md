# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

Redimensionner les photos en 200*200
  Separer les vues dans un dossier pour les photographes et l'index
Passer le controller en class
Recuperer le id du photographe
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
Faire une fonction getphotographerbyid pour recuperer les données du bon photographe par l'ID

# faire une class du controller
let monController = new MonController(monModel, maVue);
