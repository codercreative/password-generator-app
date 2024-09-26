const generatedPassword = document.getElementById("generated-password");
const charRange = document.getElementById("char-range");
const charNumber = document.getElementById("char-number");

const errorModal = document.getElementById("error-modal");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*?";

//Making the slider work (min 4 chars and max 20 chars)
charRange.addEventListener("input", function () {
  charNumber.textContent = charRange.value;
});

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let password = "";
  let length = charRange.value;
  let chars = "";

  chars += uppercaseCheckbox.checked ? uppercaseLetters : "";
  chars += lowercaseCheckbox.checked ? lowercaseLetters : "";
  chars += numbersCheckbox.checked ? numbers : "";
  chars += symbolsCheckbox.checked ? symbols : "";

  if (chars.length === 0) {
    generatedPassword.textContent = "Tick at least 1 box";
    generatedPassword.classList.add("error");
    return;
  }

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
    generatedPassword.classList.remove("error");
  }

  generatedPassword.textContent = password;
}
