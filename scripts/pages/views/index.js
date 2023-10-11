function displayListPhotographer(photographers) {
  let html= "";
  for (photographer of photographers) {
    html += `
      <div>
        <article class="photo_link">
          <a aria-label="Lien vers la gallerie de ${photographer.name}"  href="photographer.html?id=${photographer.id}" >
          <img src=assets/photographers/photographersID/redim/${photographer.portrait} alt="Portrait du photographe ${photographer.name}" />
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
