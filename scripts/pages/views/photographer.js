function photographerPage(photographer) {
  let html= "";
  html += `
      <div class="photographer_informations">
        <h2>${photographer.name}</h2>
        <p> ${photographer.city}, ${photographer.country}</p>
        <p> ${photographer.tagline}</p>
        <p> ${photographer.price}€/jour </p>
      </div>
        <img id="portrait" src=assets/photographers/photographersID/redim/${photographer.portrait} alt="Portrait du photographe" />
  `

  let htmlPhotographerPage = document.querySelector(".photographer_page")
  htmlPhotographerPage.innerHTML = html
}

function mediaByPhotographerId(mediaByPhotographerIdArray){
  let photoOfPhotographe = []
  let mediaslikes = null
  for (let media of mediaByPhotographerIdArray){
    photoOfPhotographe.push(media.image)
    console.log(media.image)
    mediaslikes = media.likes
    console.log(mediaslikes)
  }
  let gallerie = "";
  for (let photo of photoOfPhotographe){
    gallerie += `
      <div class="photographie-card">
        <img src=assets/SamplePhotos/Mimi/${photo} alt=${photo} />
        <div class="infos-of-photo"
          <p id="photo_name"> ${photo}</p>
          <p id="photo_like"> ${mediaslikes} </p>

        </div>
      </div>

    `
    let htmlGallerie = document.querySelector(".photographer_gallerie")
    htmlGallerie.innerHTML = gallerie
  }

}
