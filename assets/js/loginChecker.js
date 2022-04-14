/* ENCRIPT MODE */

/* import sjcl from "sjcl";
function loginChecker() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  encriptEmail = sjcl.hash.sha256.hash(email);
  encriptPassowrd = sjcl.hash.sha256.hash(password);
} */

/* VALIDATION MODE */

function loginChecker() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const validEmail = new RegExp(
    /^([a-zA-Z0-9_\.-]+\@[\da-zA-Z\.-]+\.[a-zA-Z\.]{2,6})$/gm
  ).test(email);
  const validPassword = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/gm
  );
  if (validEmail == false) {
    alert("Este email possui caracteres inválidos. Por favor tente novamente.");
  }
  /* NOT WORKING */
  /* else if (validPassword == false) {
    document.querySelector(".password-info").classList.remove("d-none");
  } */
}
