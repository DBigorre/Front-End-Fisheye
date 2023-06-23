async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    if (data && Array.isArray(data.photographers)) {
      console.log(data);
      return data;
    } else {
      console.error("Les données des photographes ne sont pas au format attendu.");
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
}

async function displayData(data) {
  //const photographersSection = document.querySelector(".photographer_section");
  const arr = Object.entries(data).map(([key, value]) => {
    return { key, value };
  });
  console.log(arr)
  /*console.log(data.map(photographer))
  console.log(photographersSection)
  const photographerNames = photographers.map((photographer) => photographer.name);
  photographers.forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });*/
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
