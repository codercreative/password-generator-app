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
  }

  generatedPassword.classList.remove("error");
  generatedPassword.textContent = password;

  calculatePassWordStrength(password);
}

// CALCULATE PASSWORD STRENGTH
function calculatePassWordStrength(password) {
  const strengthImgMeter = document.getElementById("strength-img-meter");

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%&*?]/.test(password);

  const isTooWeak = password.length <= 4 && password.length > 0;
  const isWeak = password.length <= 8 && !isTooWeak;
  const isMedium =
    password.length < 14 &&
    password.length > 8 &&
    hasLowerCase &&
    hasNumbers &&
    (hasUpperCase || hasSymbols);

  const isStrong =
    password.length >= 14 &&
    hasLowerCase &&
    hasNumbers &&
    (hasUpperCase || hasSymbols);

  if (!password.length) {
    strengthImgMeter.src = "assets/images/empty.png";
    strengthImgMeter.alt = "No password entered";
  } else if (isTooWeak) {
    strengthImgMeter.src = "assets/images/too-weak.png";
    strengthImgMeter.alt = "Password strength is too weak";
  } else if (isWeak) {
    strengthImgMeter.src = "assets/images/weak.png";
    strengthImgMeter.alt = "Password strength is weak";
  } else if (isMedium) {
    strengthImgMeter.src = "assets/images/medium.png";
    strengthImgMeter.alt = "Password strength is medium";
  } else if (isStrong) {
    strengthImgMeter.src = "assets/images/strong.png";
    strengthImgMeter.alt = "Password strength is strong";
  }
}

// COPY PASSWORD
copyIcon.addEventListener("click", copyPassword);

function copyPassword() {
  const passwordText = generatedPassword.textContent;
  console.log(passwordText);

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
