
async function init() {
  // Récupère les datas des photographes
  const model = new Model();
  const datas = await  model.getDatas();
  const photographers = datas.photographers;
  displayListPhotographer(photographers);
};

async function getPhotographerById(){
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id");
};

async function photographerInit(){
  const model = new Model(); // recuperation du model

  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  mediaByPhotographerId(mediaByPhotographerIdArray); //recuperation des medias du photographe

  let photographer = await model.getPhotographerById(id);

  photographerPage(photographer); // recuperation des infos du photographe
  photographerPortrait(photographer);
};

async function filter_by_btn_title() {
  const model = new Model(); // recuperation du model

  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  filter_by_title(mediaByPhotographerIdArray);
}

async function filter_by_btn_popularity() {
  const model = new Model(); // recuperation du model

  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  filter_by_popularity(mediaByPhotographerIdArray);
}

async function filter_by_btn_date() {
  const model = new Model(); // recuperation du model

  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  filter_by_date(mediaByPhotographerIdArray);
}

async function total_of_likes_of_photograph(){
  const model = new Model(); // recuperation du model

  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);
  total_of_likes(mediaByPhotographerIdArray);
}
