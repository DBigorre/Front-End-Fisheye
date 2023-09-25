
async function init() {
  // Récupère les datas des photographes
  const model = new Model();
  const datas = await  model.getDatas();
  const photographers = datas.photographers;
  displayListPhotographer(photographers);
};

async function photographerInit(){
  const model = new Model(); // recuperation du model

  let id = getIdFromUrl()

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  displayMediaByPhotographerId(mediaByPhotographerIdArray); //recuperation des medias du photographe

  let photographer = await model.getPhotographerById(id);

  displayPhotographerPage(photographer, mediaByPhotographerIdArray); // recuperation des infos du photographe
  getPhotographerPortrait(photographer);
  filter();
  incrementateLike()
};

async function filterByBtn(type = "popularity"){
  const model = new Model(); // recuperation du model

  let id = getIdFromUrl()

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id, type);

  displayMediaByPhotographerId(mediaByPhotographerIdArray);

}

async function recoverMediaByIdForTotalOfLikes(){
  const model = new Model(); // recuperation du model

  let id = getIdFromUrl()

  let photographer = await model.getPhotographerById(id);
  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);

  calculateTotalOfLikes(mediaByPhotographerIdArray, photographer);
}

function incrementateLike() {
  let hearts = document.querySelectorAll(".photolike_with_icone")
  console.log(hearts)
  for (let heart of hearts){
    heart.addEventListener("click", (e) => {
      console.log(e)
      console.log("ça marche")

    });

  }
  /*hearts.forEach(heart => {
  });*/
};

async function recoverPhotoIdForZoom(){
  const model = new Model();

  let id = getIdFromUrl();

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);

  displayLightbox();
}
