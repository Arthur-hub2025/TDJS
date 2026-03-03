/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')
let title = document.querySelector("h2");

title.textContent = `${title.textContent} du ${dateJourFr}`;
            

/* Tous les évènements */
li.addEventListener('click', ()=>{
li.classList.toggle("itemCheck");
})


/* Les fonctions */
// A voir plus tard