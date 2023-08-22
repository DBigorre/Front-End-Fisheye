function getIdFromUrl(){
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get("id"); // recuperation de l'id contenu dans l'url
  return(id)
}
