
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

  displayPhotographerPage(photographer); // recuperation des infos du photographe
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
