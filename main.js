// You can remove this line when you're ready.
console.log('Good luck!');

const formulaire = document.querySelector(".form")
const form = document.querySelector("form")
const success = document.querySelector(".succeeded")

form.addEventListener('submit', (event ) => {
  event.preventDefault();

  formulaire.classList.add('d-none');
  success.classList.remove('d-none');
})
