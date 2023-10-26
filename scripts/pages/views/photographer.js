function displayPhotographerPage(photographer, mediaByPhotographerIdArray) {
  let html= "";

  html += `
    <div class="photographer_informations">
      <h2>${photographer.name}</h2>
      <p id="phograph_city"> ${photographer.city}, ${photographer.country}</p>
      <p> ${photographer.tagline}</p>
    </div>
  `
  let formTitle = document.getElementById("formPhotographerName");
  formTitle.innerText += photographer.name
  let htmlPhotographerPage = document.querySelector(".photographer_page");
  htmlPhotographerPage.innerHTML = html
  remplirLightbox(mediaByPhotographerIdArray)
}

function getPhotographerPortrait(photographer){
  let portrait = "";
  portrait += `
    <img id="portrait" src=assets/photographers/photographersID/redim/${photographer.portrait} alt="Portrait du photographe ${photographer.name}" />
  `
  let htmlPhotographerPortrait = document.querySelector(".photographer_portrait")
  htmlPhotographerPortrait.innerHTML = portrait
}

// Fonction filtre
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
    launchSort(event.target.classList, btn_text, filter_menu, btn)
  });
  filter_menu.addEventListener("keypress", function (event){
    launchSort(event.target.classList, btn_text, filter_menu, btn)
  });
};

function launchSort(categorie, btn_text, filter_menu, btn){
  btn.style.display = "block"

  if (categorie == "date"){
    btn_text.innerHTML = "Date"
    filterByBtn("date")
  }

  if (categorie == "title"){
    btn_text.innerHTML = "Titre"
    filterByBtn("title")
  }

  if (categorie == "popularity"){
    btn_text.innerHTML = "Popularité"
    filterByBtn("popularity")
  }
  filter_menu.style.display = "none"
}

// Gallerie du photographe
function createHtmlMediaFactorie(media) {
  if(media.image){
    htmlMedia = `<img src=assets/SamplePhotos/${media.photographerId}/${media.image} data-id=${media.id} alt=${media.title} tabindex="3" />`
  }
  else{
    htmlMedia = ` <video src=assets/SamplePhotos/${media.photographerId}/${media.video} data-id=${media.id} alt=${media.title} tabindex="3" ></video> `
  }
 return htmlMedia
}

function displayMediaByPhotographerId(mediaByPhotographerIdArray){
  let gallerie = "";
  let htmlMedia = "";

  for (let media of mediaByPhotographerIdArray){
    htmlMedia = createHtmlMediaFactorie(media);
    gallerie += `
      <div class="photographie-card" role="navigation">
        ${htmlMedia}
        <div class="infos-of-photo">
          <p id="photo_name"> ${media.title}</p>
          <div class="photolike_with_icone" tabindex="3">
            <p class="photo_like" aria-label="likes"> ${media.likes} </p>
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

// Calcul et Affichage des likes totaux
function calculateTotalOfLikes(mediaByPhotographerIdArray, photographer){
  let total_of_likes = 0
  let square_of_likes = ""
  for (let media of mediaByPhotographerIdArray){
    total_of_likes += media.likes
  }
  square_of_likes += `
    <div class="square">
      <div class="squareLike">
        <p id="totalLikesNumber"> ${total_of_likes}</p> <i class="fa-solid fa-heart"></i>
      </div>
      <p> ${photographer.price}€/jour </p>
    </div>
  `

  let htmlSquare = document.querySelector(".square_total_likes")
  htmlSquare.innerHTML = square_of_likes
}

// Ouverture, remplissage et écoute dans la lightbox
async function displayLightbox(){
  let images = document.querySelectorAll(".photographer_gallerie img");
  let videos = document.querySelectorAll(".photographer_gallerie video");
  for (let image of images){
    image.addEventListener("click", function (event){
      let id = event.target.dataset.id
      realDisplayLightbox(id)
    });
    image.addEventListener("keypress", function (event){
      let id = event.target.dataset.id
      if(event.code == "Enter"){
        realDisplayLightbox(id)
      };
    });
  };
  for (let video of videos){
    video.addEventListener("click", function (event){
      let id = event.target.dataset.id
      realDisplayLightbox(id)
    });
    video.addEventListener("keypress", function (event){
      let id = event.target.dataset.id
      if(event.code == "Enter"){
        realDisplayLightbox(id)
      };
    });
  };

};

function realDisplayLightbox(id){
  let elementById = document.getElementById(id);
  let mask = document.querySelector("#mask");
  let mainContent = document.querySelector("#main");
  let lightbox = document.querySelector(".lightbox");
  let title = document.getElementById("carousselTitle");

  lightbox.style.display = "block";
  mask.style.display = "block";
  mainContent.setAttribute("aria-hidden", "true");
  let medias = document.querySelectorAll(".carousel-container *")
  for(let media of medias){
    media.classList.remove("visible");

  }
  elementById.classList.add("visible");
  title.innerText = elementById.getAttribute("alt");

  keyboardAccesInLightbox();
};

function keyboardAccesInLightbox(){
  let background = document.querySelector("#main")
  let lightbox = document.querySelector(".lightbox")
  let firstElementOfLightbox = document.querySelector("#less")
  let secondElementOfLightbox = document.querySelector("#more")
  let lastElementOfLightbox = document.querySelector("#close")

  if(lightbox.style.display == "block"){
    background.setAttribute("tabindex", -1);
    lightbox.setAttribute("tabindex", 0);

    lightbox.focus();
    lightbox.addEventListener("keypress", (event) => {
      if (event.code == "Tab") {
        firstElementOfLightbox.setAttribute("tabindex", 1)
        secondElementOfLightbox.setAttribute("tabindex", 2)
        lastElementOfLightbox.setAttribute("tabindex", 3)
      };
    });
    lightbox.addEventListener("keydown", (event) => {
      if (event.key == "ArrowLeft"){
        lessInLightbox()
      };
      if (event.code == "ArrowRight") {
        moreInLightbox()
      };
      if (event.code == "Escape") {
        closeLightbox()
      };
      if (event.key == "q") {
        lessInLightbox()
      };
      if (event.key == "d") {
        moreInLightbox()
      };
    });
  };
};

function remplirLightbox(mediaByPhotographerIdArray){
  let lightboxHtml = "";

  for (let media of mediaByPhotographerIdArray){
    if(media.image){
      lightboxHtml += `<img src="assets/SamplePhotos/${media.photographerId}/${media.image}" id="${media.id}" alt="${media.title}"  />`
    }else{
      lightboxHtml += `<video src="assets/SamplePhotos/${media.photographerId}/${media.video}" controls id="${media.id}" alt="${media.title}"></video>`
    }
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
  close.addEventListener("keypress", function(event){
    if(event.code == "Enter"){
      closeLightbox()
    };
  });

  less.addEventListener("click", function(){
    lessInLightbox()
  });

  more.addEventListener("click", function(){
    moreInLightbox()
  });
};

function closeLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let mask = document.querySelector("#mask");
  let mainContent = document.querySelector("#main");

  lightbox.style.display = "none"
  mask.style.display = "none";
  mainContent.removeAttribute("aria-hidden");
};

function lessInLightbox() {
  let image = document.querySelector(".carousel-container img.visible");
  let video = document.querySelector(".carousel-container video.visible");
  let title = document.getElementById("carousselTitle");
  let imagePrecedente = ""

  if(image){
    imagePrecedente = image.previousElementSibling;
    image.classList.remove("visible");

  } else {
    imagePrecedente = video.previousElementSibling;
    video.classList.remove("visible");
  }
  if(imagePrecedente == null){
    imagePrecedente = document.querySelector(".carousel-container :last-child")
  }
  title.innerText = imagePrecedente.getAttribute("alt");

  imagePrecedente.classList.add("visible");

};

function moreInLightbox(){
  let image = document.querySelector(".carousel-container .visible");
  let imageSuivante = image.nextElementSibling;
  let title = document.getElementById("carousselTitle");

  if(imageSuivante == null){
    imageSuivante = document.querySelector(".carousel-container :first-child")
  }
  title.innerText = imageSuivante.getAttribute("alt");
  image.classList.remove("visible");
  imageSuivante.classList.add("visible");
};

// Vérification et validation du formulaire de contact
function verificationOfFormModal(){
  const firstInput = document.getElementById('first-input');
  const firstError = document.getElementById('first-error');
  const lastInput = document.getElementById('last-input');
  const lastError = document.getElementById('last-error');
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageArea = document.getElementById('textarea');
  const messageAreaError = document.getElementById('textarea-error');

  let first_name = "";
  let last_name = "";
  let mail = "";
  let message = "";

  firstInput.addEventListener('blur', function() {
    if (firstInput.value.trim().length < 2 ) {
      firstError.innerHTML = 'Le prénom doit comporter au moins 2 caractères.';
    } else {
      firstError.innerHTML = ''
      first_name = firstInput.value
    }

  });

  lastInput.addEventListener('blur', function() {
    if (lastInput.value.trim().length < 2) {
      lastError.innerHTML = 'Le nom doit comporter au moins 2 caractères.';
    } else {
      lastError.innerHTML = '';
      last_name = lastInput.value
    }
  });


  emailInput.addEventListener('blur', function() {
    if (!emailRegex.test(emailInput.value)) {
      emailError.innerHTML = 'Veuillez entrer une adresse email valide.';
    } else {
      emailError.innerHTML = '';
      mail = emailInput.value
    }
  });

  messageArea.addEventListener('blur', function(){
    if (messageArea.value.trim().length < 1){
      messageAreaError.innerHTML = "Veuillez entrer un message."
    } else {
      messageAreaError.innerHTML = ""
      message = messageArea.value
    }
  })
  const form = document.querySelector("#contact_modal form")
  const contactModal = document.querySelector("#contact_modal")
  let background = document.querySelector("#main")

  if (contactModal.style.display == "block"){
    background.setAttribute("tabindex", -1);
    contactModal.setAttribute("tabindex", 0);
    form.focus();
  }

  form.addEventListener("keydown", (event) => {
    if (event.code == "Escape") {
      closeModal()
    };
  });

  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log("Prénom: " + first_name)
    console.log("Nom: " + last_name)
    console.log("E-mail: " + mail)
    console.log("Message: " + message)
    closeModal()
  });
};
