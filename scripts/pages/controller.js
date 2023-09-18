
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

/*function IncrementateLike() {
  let hearts = document.querySelectorAll(".fa-heart")

  hearts.forEach(heart => {
    console.log(heart)
    heart.addEventListener("click", function () {

      console.log("ça marche")

    });
  });
};*/

async function recoverPhotoIdForZoom(){
  const model = new Model();

  let id = getIdFromUrl();

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);

  displayLightbox(mediaByPhotographerIdArray);
}
