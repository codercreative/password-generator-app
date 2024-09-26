const rangeInput = document.getElementById("range");
const pwLength = document.getElementById("pw-length");

rangeInput.addEventListener("input", function () {
  pwLength.textContent = rangeInput.value;
});
