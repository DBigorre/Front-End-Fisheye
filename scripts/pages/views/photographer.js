function displayPhotographerPage(photographer, mediaByPhotographerIdArray) {
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
  remplirLightbox(mediaByPhotographerIdArray)
}

function getPhotographerPortrait(photographer){
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

function createHtmlMediaFactorie(media) {
  if(media.image){
    htmlMedia = `<img src=assets/SamplePhotos/${media.photographerId}/${media.image} data-id=${media.id} alt=${media.image} />`
  }
  else{
    htmlMedia = ` <video src=assets/SamplePhotos/${media.photographerId}/${media.video} data-id=${media.id} alt=${media.video} /> `
  }
 return htmlMedia
}

function displayMediaByPhotographerId(mediaByPhotographerIdArray){
  let gallerie = "";
  let htmlMedia = "";

  for (let media of mediaByPhotographerIdArray){
    htmlMedia = createHtmlMediaFactorie(media);
    gallerie += `
      <div class="photographie-card">
        ${htmlMedia}
        <div class="infos-of-photo">
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
    recoverPhotoIdForZoom()
};

function calculateTotalOfLikes(mediaByPhotographerIdArray, photographer){
  let total_of_likes = 0
  let square_of_likes = ""
  for (let media of mediaByPhotographerIdArray){
    total_of_likes += media.likes
  }
  square_of_likes += `
    <div class="square">
      <p> ${total_of_likes} <i class="fa-solid fa-heart"></i></p>
      <p> ${photographer.price}€/jour </p>
    </div>
  `

  let htmlSquare = document.querySelector(".square_total_likes")
  htmlSquare.innerHTML = square_of_likes
}

async function displayLightbox(mediaByPhotographerIdArray){
  let images = document.querySelectorAll("img");
  for (let image of images){
    image.addEventListener("click", function (event){
      let id = event.target.dataset.id
      realDisplayLightbox(id)
    });
  };
};

function realDisplayLightbox(id){
  let elementById = document.getElementById(id)
  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";
  elementById.classList.add("visible");
};

function remplirLightbox(mediaByPhotographerIdArray){
  let lightboxHtml = "";

  for (let media of mediaByPhotographerIdArray){
    lightboxHtml += `
    <img src=assets/SamplePhotos/${media.photographerId}/${media.image} id=${media.id} alt="" />
    `
  }

  let htmlcontainer = document.querySelector(".carousel-container")
  htmlcontainer.innerHTML = lightboxHtml
  eventlistenerBtn()
};


function eventlistenerBtn(){
  let close = document.querySelector("#close")
  let less = document.querySelector("#less")
  let more = document.querySelector("#more")

  close.addEventListener("click", function(){
    closeLightbox()
  });

  less.addEventListener("click", function(){
    lessInLightbox()
  });

  more.addEventListener("click", function(){
    moreInLightbox()
  });
};

function closeLightbox() {
  let lightbox = document.querySelector(".lightbox")

  lightbox.style.display = "none"
};

function lessInLightbox() {
  let image = document.querySelector(".carousel-container img.visible");
  let imagePrecedente = image.previousElementSibling;
  //console.log(lightboxHtml.length)
  //let derniereImage = lightboxHtml[lightboxHtml.length - 1];
  //console.log(derniereImage)
  image.classList.remove("visible");
  imagePrecedente.classList.add("visible");
};

function moreInLightbox(){
  let image = document.querySelector(".carousel-container img.visible");
  let imageSuivante = image.nextElementSibling;
  image.classList.remove("visible");
  imageSuivante.classList.add("visible");
};
