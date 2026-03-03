/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')
let title = document.querySelector("h2");
let myInput = document.querySelector("#myInput");
let btn = document.querySelector("#btnAjouter");
let liste = document.querySelector("#listeCourses");

title.textContent = `${title.textContent} du ${dateJourFr}`;
            

/* Tous les évènements */
li.addEventListener('click', ()=>{
li.classList.toggle("itemCheck");
});
btn.addEventListener('click', () => {
  addProduct();
});


myInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") addProduct();
});


/* Les fonctions */
function addProduct() {
  let valeur = myInput.value;

  if (valeur === "") {
    alert("Erreur de saisie");
  } else {
    let newLi = document.createElement("li");
    newLi.textContent = valeur;

    newLi.addEventListener('click', () => {
      newLi.classList.toggle("itemCheck");
    });

    newLi.addEventListener('dblclick', () => {
      liste.removeChild(newLi);
      alert(`"${valeur}" a été supprimé !`);
    });

    liste.appendChild(newLi);
    myInput.value = "";
  }
}
// A voir plus tard