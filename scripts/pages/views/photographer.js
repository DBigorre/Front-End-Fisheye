function photographerPage(photographer) {
  let html= "";
  html += `
    <div class="photographer_informations">
      <h2>${photographer.name}</h2>
      <p id="phograph_city"> ${photographer.city}, ${photographer.country}</p>
      <p> ${photographer.tagline}</p>
    </div>
  `

  let htmlPhotographerPage = document.querySelector(".photographer_page")
  htmlPhotographerPage.innerHTML = html
}

function photographerPortrait(photographer){
  let portrait = "";
  portrait += `
    <img id="portrait" src=assets/photographers/photographersID/redim/${photographer.portrait} alt="Portrait du photographe" />
  `
  let htmlPhotographerPortrait = document.querySelector(".photographer_portrait")
  htmlPhotographerPortrait.innerHTML = portrait
}

function mediaByPhotographerId(mediaByPhotographerIdArray){

  let gallerie = "";

    for (let media of mediaByPhotographerIdArray){
      console.log(media.photographerId)
    gallerie += `
      <div class="photographie-card">
        <img src=assets/SamplePhotos/${media.photographerId}/${media.image} alt=${media.image} />
        <div class="infos-of-photo"
          <p id="photo_name"> ${media.image}</p>
          <div class="photolike_with_icone">
            <p id="photo_like"> ${media.likes} </p>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>

    `

  }
    let htmlGallerie = document.querySelector(".photographer_gallerie")
    htmlGallerie.innerHTML = gallerie
}
