function photographerPage(photographer) {
  console.log(photographer);
  console.log(photographer.name)
  let html= "";
  html += `

        <h2>${photographer.name}</h2>
        <p> ${photographer.city}, ${photographer.country}</p>
        <p> ${photographer.tagline}</p>
        <p> ${photographer.price}€/jour </p>
  `

  let htmlPhotographerPage = document.querySelector(".photographer_page")
  htmlPhotographerPage.innerHTML = html
}

function mediaByPhotographerId(mediaByPhotographerIdArray){
  // probleme de recuperation d'objet et de tableau du coup probleme d'iteration
  let photoOfPhotographe = []
  for (let media of mediaByPhotographerIdArray){
    photoOfPhotographe.push(media.image)
  }
  console.log(photoOfPhotographe)
  let gallerie = "";
  for (let photo of photoOfPhotographe){
    console.log(photo)
    gallerie += `
        <img src=assets/SamplePhotos/Mimi/${photo} alt=${photo} />

    `
    let htmlGallerie = document.querySelector(".photographer_gallerie")
    htmlGallerie.innerHTML = gallerie
  }

}
