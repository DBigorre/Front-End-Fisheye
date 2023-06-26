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

  arr.forEach(photographer => {
    // Créez une chaîne de caractères contenant le code HTML pour chaque photographe
    const photographerHTML = `
      <li>
        <h2>${photographer.value.name}</h2>
        <p>ID: ${photographer.value.id}</p>
        <p>City: ${photographer.value.city}</p>
        <p>Country: ${photographer.value.country}</p>
        <p>Tagline: ${photographer.value.tagline}</p>
        <p>Price: ${photographer.value.price}</p>
        <img src="${photographer.value.portrait}" alt="${photographer.value.name}">
      </li>
    `;
      // Ajoutez le code HTML à la liste
      photographersList.innerHTML += photographerHTML;
    });
  }

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
