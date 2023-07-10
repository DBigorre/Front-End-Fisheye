async function getDatas() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    if (data && Array.isArray(data.photographers)) {
      return data;
    } else {
      console.error("Les données des photographes ne sont pas au format attendu.");
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
}
