
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
  let hearts = document.querySelectorAll(".photolike_with_icone");


  for (let heart of hearts){
    heart.addEventListener("click", (e) => {
      doIncrementateLike(heart)
    });
    heart.addEventListener("keypress", (e) => {
      if(e.code == "Enter"){
        doIncrementateLike(heart)
      };
    });
  };
};

function doIncrementateLike(heart) {
  let numberOfLike = 0;
  let totalOfLikeIncrementate = 0;
  let totalOfLikeDecrementate = 0;

  let likesString = heart.querySelector(".photo_like")
  let contenu = likesString.textContent;
  let heartIcon = heart.querySelector(".fa-heart");
  let totalOfLikes = document.querySelector("#totalLikesNumber")
  let contenuOfSquare = totalOfLikes.textContent;

      // si le coeur a la classe liked
      if(heartIcon.classList.contains("liked")){
        // transformation en nombre de la string récupéré et decrementation
        numberOfLike = parseInt(contenu)
        numberOfLike --

        // visuel du nombre de like avec decrementation
        likesString.textContent = numberOfLike.toString();

        // changement du visuel du coeur
        heartIcon.classList.remove("liked");

        // soustraction sur le total des likes
        totalOfLikeDecrementate = parseInt(contenuOfSquare)
        totalOfLikeDecrementate --

        totalOfLikes.textContent = totalOfLikeDecrementate.toString();
      } else {
        // si le coeur n'a pas la classe liked

        // transformation en nombre de la string récupéré et incrémentation
        numberOfLike = parseInt(contenu)
        numberOfLike ++

        // visuel du nombre de like incrémenté
        likesString.textContent = numberOfLike.toString();

        // changement du visuel du coeur
        heartIcon.classList.add("liked");

        // ajout sur le total des likes
        totalOfLikeIncrementate = parseInt(contenuOfSquare)
        totalOfLikeIncrementate ++

        totalOfLikes.textContent = totalOfLikeIncrementate.toString();
      };
}

async function recoverPhotoIdForZoom(){
  const model = new Model();

  let id = getIdFromUrl();

  let mediaByPhotographerIdArray = await model.getMediasByPhotographerId(id);

  displayLightbox();
};
