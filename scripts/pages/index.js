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
  photographersArray = [];
  for (let photographer of arr) {
    let photographerData = new Photographer(photographer.value.name, photographer.value.id, photographer.value.city, photographer.value.country, photographer.value.tagline, photographer.value.portrait);
    photographersArray.push(photographerData);
  };

  const photographersList = document.getElementById("photographersList"); // Sélectionnez l'élément <ul> dans votre HTML

  photographersArray.forEach(photographer => {
    // Créez un élément <li> pour chaque photographe
    const listItem = document.createElement("li");
    listItem.textContent = photographer.name;
    listItem.textContent = photographer.city;
    listItem.textContent = photographer.country;
    listItem.textContent = photographer.portrait;

    // Ajoutez l'élément <li> à la liste
    photographersList.appendChild(listItem);
  });
}


/*console.log(data.map(photographer))
console.log(photographersSection)
const photographerNames = photographers.map((photographer) => photographer.name);
photographers.forEach((photographer) => {
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.appendChild(userCardDOM);
});*/


async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
