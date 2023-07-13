function displayListPhotographer(photographers) {
  console.log(photographers);
  let html= "";
  for (photographer of photographers) {
    console.log(photographer)
    html += `
      <div>
        <article class="photo_link">
          <a href="#" onclick=return photographerLink();return false;>
          <img src=assets/photographers/photographersID/${photographer.portrait} alt="Portrait du photographe" />
          <h2>${photographer.name}</h2>
        </a>
        </article>
        <article class="photo_infos">
          <p id="city"> ${photographer.city}, ${photographer.country}</p>
          <p id="tagline"> ${photographer.tagline}</p>
          <p id="price"> ${photographer.price}€/jour </p>
        </article>
      </div>
    `
  }

  let htmlPhotographerSection = document.querySelector(".photographer_section")
  htmlPhotographerSection.innerHTML = html
}
