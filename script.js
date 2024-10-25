const generatedPassword = document.getElementById("generated-password");
const copyIcon = document.getElementById("copy-icon");
const charRange = document.getElementById("char-range");
const charNumber = document.getElementById("char-number");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*?";

// SHOWING THE VALUE OF THE SLIDER RANGE
charRange.addEventListener("input", function () {
  charNumber.textContent = charRange.value;
});

// GENERATING THE PASSWORD
generateBtn.addEventListener("click", generatePassword);
// if the user plays around with the buttons and range then the code will still function as expected with these eventlisteners added to the js code:
uppercaseCheckbox.addEventListener("change", generatePassword);

lowercaseCheckbox.addEventListener("change", generatePassword);

numbersCheckbox.addEventListener("change", generatePassword);

symbolsCheckbox.addEventListener("change", generatePassword);

charRange.addEventListener("input", generatePassword);

function generatePassword() {
  let password = "";
  let length = parseInt(charRange.value);
  let chars = "";

  if (uppercaseCheckbox.checked) chars += uppercaseLetters;
  if (lowercaseCheckbox.checked) chars += lowercaseLetters;
  if (numbersCheckbox.checked) chars += numbers;
  if (symbolsCheckbox.checked) chars += symbols;

  if (!chars) {
    generatedPassword.textContent = "Select at least one option";
    generatedPassword.classList.add("error");
    setTimeout(() => {
      generatedPassword.textContent = "P4$5W0rD!";
      generatedPassword.classList.remove("error");
    }, 1500);
    return;
  }

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  generatedPassword.classList.remove("error");
  generatedPassword.textContent = password;

  calculatePassWordStrength(password);
}

// CALCULATE PASSWORD STRENGTH
function calculatePassWordStrength(password) {
  const strengthImgMeter = document.getElementById("strength-img-meter");

  const length = password.length;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%&*?]/.test(password);

  let typeCount = 0;

  if (hasUpperCase) typeCount++;
  if (hasLowerCase) typeCount++;
  if (hasNumbers) typeCount++;
  if (hasSymbols) typeCount++;

  let strengthLevel = "";

  if (length === 0) {
    strengthLevel = "empty";
  } else if (length <= 4) {
    strengthLevel = "too-weak";
  } else if (length <= 8) {
    strengthLevel = typeCount >= 2 ? "weak" : "too-weak";
  } else if (length <= 13) {
    strengthLevel = typeCount >= 2 ? "medium" : "weak";
  } else if (length > 13) {
    strengthLevel = typeCount >= 3 ? "strong" : "medium";
  }

  if (strengthLevel === "empty") {
    strengthImgMeter.src = "assets/images/empty.png";
    strengthImgMeter.alt = "No password entered";
  } else if (strengthLevel === "too-weak") {
    strengthImgMeter.src = "assets/images/too-weak.png";
    strengthImgMeter.alt = "Password strength is too weak";
  } else if (strengthLevel === "weak") {
    strengthImgMeter.src = "assets/images/weak.png";
    strengthImgMeter.alt = "Password strength is weak";
  } else if (strengthLevel === "medium") {
    strengthImgMeter.src = "assets/images/medium.png";
    strengthImgMeter.alt = "Password strength is medium";
  } else if (strengthLevel === "strong") {
    strengthImgMeter.src = "assets/images/strong.png";
    strengthImgMeter.alt = "Password strength is strong";
  }
}

// COPY PASSWORD
copyIcon.addEventListener("click", copyPassword);

function copyPassword() {
  const passwordText = generatedPassword.textContent;

  if (passwordText === "P4$5W0rD!" || passwordText === "Tick at least 1 box") {
    return;
  }

  navigator.clipboard
    .writeText(passwordText)
    .then(() => {
      const originalText = generatedPassword.textContent;
      generatedPassword.textContent = "Copied!";
      generatedPassword.classList.add("copied");

      setTimeout(() => {
        generatedPassword.textContent = originalText;
        generatedPassword.classList.remove("copied");
      }, 2000);
    })
    .catch((err) => {
      console.log("Failed to copy: ", err);
    });
}
