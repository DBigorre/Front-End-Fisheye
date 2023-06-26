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

async function displayData(data) {
  const arr = Object.entries(data.photographers).map(([key, value]) => {
    return { key, value };
  });
  console.log(arr)
  for (let photographer of arr) {
    const array = Object.entries(photographer.value).map(([key2, value2]) => {
      return { key2, value2 };
    });
    /*const photographerData = Object.entries(photographer.value).map(([key, value]) => {
        return {key , value};
      });*/
    }
    console.log(array);
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
