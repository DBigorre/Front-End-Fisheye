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
  console.log("filter choice ok")
  let filter_menu = document.querySelector(".filter_menu");
  let filter_choice = document.querySelector(".filter_choice");
  console.log(filter_menu)
  console.log(filter_choice)
  filter_menu.style.display = "block"
  filter_choice.style.display = "none"
};

async function filter_menu(){
  const filter_menu = document.querySelector(".filter_menu");
  let filter_choice = document.querySelector(".filter_choice");
  const date_btn = document.querySelector("#date-button");
  const title_btn = document.querySelector("#title-button");
  const popularity_btn = document.querySelector("#popularity-button");

  filter_menu.addEventListener("click", function (event){
    if (event.target.classList == "date"){
      date_btn.style.display = "block"
      title_btn.style.display = "none"
      popularity_btn.style.display = "none"
      filter_choice = date_btn
      console.log(filter_choice)
    }

    if (event.target.classList == "title"){
      title_btn.style.display = "block"
      date_btn.style.display = "none"
      popularity_btn.style.display = "none"
    }

    if (event.target.classList == "popularity"){
      popularity_btn.style.display = "block"
      date_btn.style.display = "none"
      title_btn.style.display = "none"
    }
    filter_menu.style.display = "none"
  });
};
