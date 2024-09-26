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
