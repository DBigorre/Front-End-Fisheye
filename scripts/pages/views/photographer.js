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

async function filter(){
  let filter_choice = document.querySelector(".filter_choice");
  filter_menu();
  filter_choice.addEventListener("click", function () {
    choice_select();
  });
};

async function choice_select(){
  let filter_menu = document.querySelector(".filter_menu");
  let filter_choice = document.querySelector(".filter_choice");
  filter_menu.style.display = "block"
  filter_choice.style.display = "none"
};

async function filter_menu(){
  const filter_menu = document.querySelector(".filter_menu");
  const btn_text = document.querySelector(".filter_choice span");
  const btn = document.querySelector(".filter_choice");



  filter_menu.addEventListener("click", function (event){
    btn.style.display = "block"
    if (event.target.classList == "date"){
      btn_text.innerHTML = "Date"
      filter_by_btn_date()
    }

    if (event.target.classList == "title"){
      btn_text.innerHTML = "Titre"
      filter_by_btn_title()
    }

    if (event.target.classList == "popularity"){
      btn_text.innerHTML = "Popularité"
      filter_by_btn_popularity()
    }
    filter_menu.style.display = "none"
  });
};


function mediaByPhotographerId(mediaByPhotographerIdArray){
  let gallerie = "";
  mediaByPhotographerIdArray = mediaByPhotographerIdArray.sort((x, y) => y.likes - x.likes);
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

function filter_by_title(mediaByPhotographerIdArray) {
  let gallerie = "";
  mediaByPhotographerIdArray = mediaByPhotographerIdArray.sort((a, b) => a.title.localeCompare(b.title));
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

function filter_by_popularity(mediaByPhotographerIdArray) {
  let gallerie = "";
  mediaByPhotographerIdArray = mediaByPhotographerIdArray.sort((x, y) => y.likes - x.likes);
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

function filter_by_date(mediaByPhotographerIdArray) {
  let gallerie = "";
  mediaByPhotographerIdArray = mediaByPhotographerIdArray.sort((a, b) => a.date.localeCompare(b.date));
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

function total_of_likes(mediaByPhotographerIdArray){
  let total_of_likes = 0
  console.log(mediaByPhotographerIdArray)
  for (let media of mediaByPhotographerIdArray){
    total_of_likes += media.likes
  }
  console.log(total_of_likes)
}
