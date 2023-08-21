async function init(){
  console.log("test")
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
  console.log(btn)

  filter_menu.addEventListener("click", function (event){
    btn.style.display = "block"
    if (event.target.classList == "date"){
      btn_text.innerHTML = "Date"
      // il faudra appeler la fonction de tri (à coder)
    }

    if (event.target.classList == "title"){
      btn_text.innerHTML = "Titre"
    }

    if (event.target.classList == "popularity"){
      btn_text.innerHTML = "Popularité"
    }
    filter_menu.style.display = "none"
  });
};
