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
    let medias = this.data.medias
  };

  async getMediasByPhotographerId(idPhotographer){
    let media = this.getMedia();
  };
}
