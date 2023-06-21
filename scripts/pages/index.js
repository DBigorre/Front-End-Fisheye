async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}


async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  const photographerNames = console.log(photographersSection.map((photographer) => photographer.name));

  photographers.forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
