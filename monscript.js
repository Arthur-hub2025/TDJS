/* Toutes les variables */
let items = document.querySelectorAll("#listeCourses li");

items.forEach(item => {
  item.addEventListener('click', () => {
    item.style.backgroundColor = "lightblue";
    item.style.textDecoration = "line-through";
  });
});
/* Les fonctions */
// A voir plus tard