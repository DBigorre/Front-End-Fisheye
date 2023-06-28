async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    if (data && Array.isArray(data.photographers)) {
      return data;
    } else {
      console.error("Les données des photographes ne sont pas au format attendu.");
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
}

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
    let photographerData = new Photographer(photographer.value.name, photographer.value.id, photographer.value.city, photographer.value.country, photographer.value.tagline, photographer.value.portrait);
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
  pPriceElement.textContent = photographer.price + "/jour";


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

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  const photographersArray = await displayData(photographers);
  //displayData(photographers);
  console.log(photographersArray)
}

init();
