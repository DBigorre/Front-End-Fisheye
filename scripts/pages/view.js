function displayListPhotographer(photographers) {
  console.log(photographers);
  let html= "";
  for (photographer of photographers) {
    console.log(photographer)
    html += `
      <div>
        <img src=${photographer.portrait} alt="Portrait du photographe" />
        <h2>${photographer.name}</h2>
        <p> ${photographer.city}, ${photographer.country}</p>
        <p> ${photographer.tagline}</p>
        <p> ${photographer.price}/jour </p>
      </div>
    `
  }

  let htmlPhotographerSection = document.querySelector(".photographer_section")
  htmlPhotographerSection.innerHTML = html
}
