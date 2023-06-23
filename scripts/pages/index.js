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

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  console.log(data)
  console.log(photographersSection)
  console.log("b")
  const photographerNames = photographers.map((photographer) => photographer.name);
  photographers.forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
