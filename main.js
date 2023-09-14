// You can remove this line when you're ready.
console.log('Good luck!');

function validateForm() {
  const name = document.forms["webistryForm"]["name"].value;
  const email = document.forms["webistryForm"]["email"].value;

  if (name == "")   {
    alert("Name must be filled out");
    return false;
  } else if (email == "")   {
    alert("Email must be filled out");
    return false;
  }
}
