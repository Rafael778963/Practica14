const notas = document.getElementById("notas");

const notasAGuardar = "notasGuardadas";

notas.value = localStorage.getItem(notasAGuardar) || "";

notas.addEventListener("input", function () {
  localStorage.setItem(notasAGuardar, notas.value);

})