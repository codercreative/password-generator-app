const generatedPassword = document.getElementById("generated-password");
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
  }

  generatedPassword.classList.remove("error");
  generatedPassword.textContent = password;

  calculatePassWordStrength(password);
}

function calculatePassWordStrength(password) {
  const strengthImgMeter = document.getElementById("strength-img-meter");

  const isTooWeak = password.length > 0 && password.length <= 4;
  const isWeak = password.length > 4 && password.length <= 6;
  const isMedium =
    password.length > 6 && /[0-9]/.test(password) && /[a-zA-Z]/.test(password);
  const isStrong =
    (password.length >= 10 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)) ||
    /[\W_]/.test(password);

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
  console.log("isStrong:", isStrong);
}
