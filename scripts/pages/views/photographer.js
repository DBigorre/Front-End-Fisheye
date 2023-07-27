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
  // probleme de recuperation d'objet et on de tableau du coup probleme d'iteration
  for (let media of mediaByPhotographerIdArray){
    console.log(media.image)
  }
  /*let gallerie = "";
  gallerie += `
    <ul>
      <li> ${media.image} </li>
    </ul>
  `

  let htmlGallerie = document.querySelector(".photographer_gallerie")
  htmlGallerie.innerHTML = html*/
}
