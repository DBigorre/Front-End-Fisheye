function displayPhotographerPage(photographer) {
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

function getPhotographerPortrait(photographer){
  console.log(photographer)
  let portrait = "";
  portrait += `
    <img id="portrait" src=assets/photographers/photographersID/redim/${photographer.portrait} alt="Portrait du photographe" />
  `
  let htmlPhotographerPortrait = document.querySelector(".photographer_portrait")
  htmlPhotographerPortrait.innerHTML = portrait
}

async function filter(){
  let filter_choice = document.querySelector(".filter_choice");
  getFilterChoice();
  filter_choice.addEventListener("click", function () {
    displayFilterList();
  });
};

async function displayFilterList(){
  let filter_menu = document.querySelector(".filter_menu");
  let filter_choice = document.querySelector(".filter_choice");
  filter_menu.style.display = "block"
  filter_choice.style.display = "none"
};

async function getFilterChoice(){
  const filter_menu = document.querySelector(".filter_menu");
  const btn_text = document.querySelector(".filter_choice span");
  const btn = document.querySelector(".filter_choice");



  filter_menu.addEventListener("click", function (event){
    btn.style.display = "block"
    if (event.target.classList == "date"){
      btn_text.innerHTML = "Date"
      filterByBtn("date")
    }

    if (event.target.classList == "title"){
      btn_text.innerHTML = "Titre"
      filterByBtn("title")
    }

    if (event.target.classList == "popularity"){
      btn_text.innerHTML = "Popularité"
      filterByBtn("popularity")
    }
    filter_menu.style.display = "none"
  });
};


function displayMediaByPhotographerId(mediaByPhotographerIdArray){
  let gallerie = "";
  for (let media of mediaByPhotographerIdArray){
    gallerie += `
      <div class="photographie-card">
        <img src=assets/SamplePhotos/${media.photographerId}/${media.image} alt=${media.image} />
        <div class="infos-of-photo"
          <p id="photo_name"> ${media.title}</p>
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
};

function calculateTotalOfLikes(mediaByPhotographerIdArray, photographer){
  let total_of_likes = 0
  let square_of_likes = ""
  console.log(mediaByPhotographerIdArray)
  for (let media of mediaByPhotographerIdArray){
    total_of_likes += media.likes
  }
  console.log(total_of_likes)
  square_of_likes += `
    <div class="square">
      <p> ${total_of_likes} <i class="fa-solid fa-heart"></i></p>
      <p> ${photographer.price}€/jour </p>
    </div>
  `

  let htmlSquare = document.querySelector(".square_total_likes")
  htmlSquare.innerHTML = square_of_likes
}
