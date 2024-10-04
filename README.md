# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Some of the various tasks/problems I had to work through when building the app:

**CSS**

- Make range indicator green
- Create green checkboxes when user selects them
- Ensure that all hover and focus states for the interactive elements are created
- Change copy icon to white on hover
- Add green and very dark grey css for range
- Add hover state for range
- Swap bullets for icon check
- Check that the arrow arrow svg inside the generate button is coded correctly
- Check accessibility throughout
- Include more margin/padding
- How to show the weak/medium/strong in css/js
- Add ease on generate button

**Character Length**

- Implement dynamic character length adjustment using a range slider

**Generate Password**

- Ensure password generation logic to include various character type selections (uppercase, lowercase, numbers, symbols)

**Visually Represent Password Strength**

- Add strength indicators to visually represent the strength of the generated password (research)

**Error Message**

- If no checkboxes are ticked - show an error message where the password is generated

**Copy to Clipboard**

- Add a copy-to-clipboard functionality

**Style the App Responsively**

**Accessibility**

- Ensure accessibility throughout the app

**Test for Various User Scenarios**

**Create a Reset Button?**

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Adding an event listener and adjust the number of characters dynamically based on user's range input.

```js
//Making the slider work (min 4 chars and max 20 chars)
//pwLength is the element displaying the password length and rangeInput is the slider input
rangeInput.addEventListener("input", function () {
  pwLength.textContent = rangeInput.value;
});
```

In order to change the copy icon (svg) on hover, I placed the svg inline in the HTML:

```html
<svg class="copy-btn" width="21" height="24" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
    fill="#FFF"
  />
</svg>
```

In order for the hover state to work, I had to remember to add path after the class name:

```css
.copy-icon {
  cursor: pointer;
}

.copy-icon path {
  transition: fill 0.3s ease;
}

.copy-icon:hover path {
  fill: #a4ffaf;
}
```

I exported the strength indicators (too weak, weak, medium and strong) from the Figma file into the assets folder. Easier than creating the strength bars myself.

I learned that you can use 0-9 or \d to check for digits in a string:

```js
[0-9]/.test(password)
/\d/.test(password)
```

### Continued development

TBD...

### Useful resources

TBD...

- [Example resource 1](https://www.example.com)
- [Example resource 2](https://www.example.com)

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

TBD...
