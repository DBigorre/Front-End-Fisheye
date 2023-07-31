class Model{
  constructor(){
    this.data = null
  }
  async getDatas() {
    if (this.data){
      return this.data
    }
    try {
      const response = await fetch("../../data/photographers.json");
      this.data = await response.json();
      if (this.data && Array.isArray(this.data.photographers)) {
        return this.data;
      } else {
        console.error("Les données des photographes ne sont pas au format attendu.");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  async getMedias(){
    let datas = await this.getDatas()
    return (datas.media) // recuperation de la liste des medias
  };

  async getPhotographers(){
    let datas = await this.getDatas()
    return (datas.photographers) // recuperation de la liste des photographes
  }

  async getMediasByPhotographerId(idPhotographer){
    const mediaByPhotographerIdArray = []
    let medias = await this.getMedias();
    for (let mediaId of medias) {
      if (mediaId.photographerId == idPhotographer){
        mediaByPhotographerIdArray.push(mediaId)
      };
    };// recuperation des medias de l'artiste concerné et stockage dans le tableau
    return (mediaByPhotographerIdArray);
  };

  async getPhotographerById(idPhotographer){
    let photographerList = await this.getPhotographers();
    for (let photographer of photographerList){
      if (photographer.id == idPhotographer){
        return (photographer);
      };// recuperation des infos du photographe
    };
  };
}
