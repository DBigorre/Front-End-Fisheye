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
