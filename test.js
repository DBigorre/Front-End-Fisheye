/*async function testofnumber() {
  let less = document.querySelector("#less");
  let more = document.querySelector("#more");
  let total = 0;

  more.addEventListener("click", function () {
    if(total == 0 || total > 0 && total < 5){
      total += 1
    }
    else{
      total = 0
    }
    getTotal(total)
  });

  less.addEventListener("click", function () {
    if(total == 1 || total > 0 && total < 6){
      total -= 1
    }
    else{
      total = 5
    }
    getTotal(total)
  });
}

function getTotal(total){
  let array = ["chaton1", "chaton2", "chaton3", "chiot1", "chiot2", "chiot3"];
  let html = "";

  for (let pet of array){
    console.log(pet)
    html += `
      <img src=testimage/${pet} alt="" />
    `
  }

  let htmlTotal = document.querySelector(".result")
  htmlTotal.innerHTML = html
}*/

/*const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const slideWidth = carouselSlides[0].clientWidth; // Largeur d'un élément de diapositive

let currentIndex = 0;

function displayImages(){

}

function goToSlide(index) {

  currentIndex = index;
  const translateX = -currentIndex * slideWidth;
  carouselContainer.style.transform = `translateX(${translateX}px)`;
}

// Écouteurs d'événements pour la navigation (par exemple, des boutons précédents et suivants)
document.querySelector('#less').addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

document.querySelector('#more').addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});*/

function displayLightbox(){
  let images = document.querySelectorAll(".images img")
  let lightbox = document.querySelector(".lightbox")
  let id = 0

  for (let image of images){
    image.addEventListener("click", function (){
      lightbox.style.display = "block"
      id = event.target.id
      src = event.target.src
      remplirLightbox(id,  src)
    });
  };
};

function remplirLightbox(id, src){
  let html = ""

  html += `
  <img src=${src} id=${id} alt="" />
  `
  let htmlcontainer = document.querySelector(".carousel-container")
  htmlcontainer.innerHTML = html
  eventlistenerBtn(id, src)
};

function eventlistenerBtn(id, src){
  let close = document.querySelector("#close")
  let less = document.querySelector("#less")
  let more = document.querySelector("#more")

  close.addEventListener("click", function(){
    closeLightbox()
  });

  less.addEventListener("click", function(){
    lessInLightbox(id, src)
  });

  more.addEventListener("click", function(){
    moreInLightbox(id, src)
  });
};

function closeLightbox() {
  let lightbox = document.querySelector(".lightbox")

  lightbox.style.display = "none"
}

function lessInLightbox(id, src) {
  let images = document.querySelectorAll(".images img")
  if(id == 1 || id > 0 && id < 6){
    id -= 1
    for (image of images){
      if (id == image.id){
        src = image.src
      }
    }
  }
  else{
    id = 5
    for (image of images){
      if (id == image.id){
        src = image.src
      }
    }
  }
  remplirLightbox(id, src)
}

function moreInLightbox(id, src){
  let images = document.querySelectorAll(".images img");
  if(id == 0 || id > 0 && id < 5){
    id += 1
    for (image of images){
      if (id == image.id){
        src = image.src
      }
    }
  }
  else{
    id = 0
    for (image of images){
      if (id == image.id){
        src = image.src
      }
    }
  }
  remplirLightbox(id, src)
};
