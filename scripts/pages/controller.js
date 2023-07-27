
  async function init() {
    // Récupère les datas des photographes
    const model = new Model();
    const datas = await  model.getDatas();
    const photographers = datas.photographers;
    displayListPhotographer(photographers);
  };

  async function getPhotographerById(){
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get("id");
  };

  async function photographerInit(){
    const model = new Model();
    const datas = await  model.getDatas();
    const photographers = datas.photographers; //recuperation des photographes
    const medias = datas.media; // recuperation des medias

    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

    const mediaByPhotographerIdArray = []
    for (let mediaId of medias) {
      if (mediaId.photographerId == id){
        mediaByPhotographerIdArray.push(mediaId)
      };
    };// recuperation des medias de l'artiste concerné
    mediaByPhotographerId(mediaByPhotographerIdArray)
    //console.log(mediaByPhotographerId)

    const photographerPageById = null
    for (let photographer of photographers){
      if (photographer.id == id){
        const photographerPageById = photographer
        photographerPage(photographerPageById)
        return(photographerPageById)
      };
      //console.log(photographerPageById)
    };// recuperation des infos de l'artiste concerné
  };


  /*
  class Photographer {
    constructor(name, id, city, country, tagline, price, portrait) {
      this.name = name;
      this.id = id;
      this.city = city;
      this.country = country;
      this.tagline = tagline;
      this.price = price;
      this.portrait = portrait
  }
}

async function displayData(data) {
  const arr = Object.entries(data.photographers).map(([key, value]) => {
    return { key, value };
  });
  let photographersArray = [];
  for (let photographer of arr) {
    let photographerData = new Photographer(photographer.value.name, photographer.value.id, photographer.value.city, photographer.value.country, photographer.value.tagline, photographer.value.price, photographer.value.portrait);
    photographersArray.push(photographerData);
  };
  // Récupérer l'élément <ul> dans votre HTML
const photographersList = document.getElementById("photographersList");

// Iterer sur les photographes et ajouter leurs informations à la liste
photographersArray.forEach(photographer => {
  // Créer un élément <li>
  const liElement = document.createElement("li");

  // Créer les éléments HTML pour les informations du photographe
  const imgElement = document.createElement("img");
  imgElement.src = photographer.portrait;
  imgElement.alt = photographer.name;

  const h2Element = document.createElement("h2");
  h2Element.textContent = photographer.name;

  const pCityElement = document.createElement("p");
  pCityElement.textContent = photographer.city + "," + photographer.country;

  const pTaglineElement = document.createElement("p");
  pTaglineElement.textContent = photographer.tagline;

  const pPriceElement = document.createElement("p");
  pPriceElement.textContent = photographer.price + "€/jour";


  // Ajouter les éléments à l'élément <li>
  liElement.appendChild(imgElement);
  liElement.appendChild(h2Element);
  liElement.appendChild(pCityElement);
  liElement.appendChild(pTaglineElement);
  liElement.appendChild(pPriceElement);

  // Ajouter l'élément <li> à la liste
  photographersList.appendChild(liElement);
});
return photographersArray;
}
*/
/*async function photographerLink() {
  //Créer une route pour les shows
  //get "photographers/:id", to: "photographers#show"
  // Sélectionner le nom du photographe et créer un url contenant ce nom

  // Renvoie vers une page avec le nom du photographe(url créee avant)
    // pb 1: page non créee

    //solution 1: Possibiliter de génerer des pages en bouclant sur les noms des photographes
    // afin que chacun ait sa page perso sans avoir a coder chaque pages à chaque nouvelle entrée
    // dans la base de donnée

  // En cas d'erreur dans le lien, ne pas bouger ou renvoyer un message d'erreur

}*/



/* async function photographerCall{

}*/
