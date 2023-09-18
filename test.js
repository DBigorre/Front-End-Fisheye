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
