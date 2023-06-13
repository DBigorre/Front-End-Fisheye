    //async function getPhotographers() {
        // mise en place de la page d'accueil
// import des informations et image depuis la factorie
import photographerFactory from '../factories/photographer.js';
import getData from '../utils/fonction.js';

// mise en place des articles sur la page
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');// crée une const pour ajouter les articles sur la page
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// initiation des fonctions de la page d'accueil
async function init() {
  const { photographers } = await getData();
  displayData(photographers);
}

init();
      /*const index = new Index('photographers') //creation d'une instance avec appel de ses methodes
      index.main()

        let photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [myPhotographer.name]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };

    init() */
