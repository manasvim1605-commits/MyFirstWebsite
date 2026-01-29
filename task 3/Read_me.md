# Cold Coffee Delight – Interactive JavaScript Project

This project demonstrates how JavaScript can make a basic website interactive through DOM manipulation, event handling, form validation, theme toggling, and dynamic UI updates.
It is created as part of Week 3: JavaScript – Making Websites Interactive.

---

## Project Overview

Cold Coffee Delight is a simple, interactive website designed for coffee lovers.
The project showcases essential JavaScript concepts such as:

* DOM manipulation
* Event listeners
* Show/Hide content functionality
* Light/Dark mode toggle
* Form validation
* Reusable functions
* (Optional) Image slider

This project meets all requirements of the Week 3 JavaScript assignment.

---

## Folder Structure

```
Cold-Coffee-Website
│── index.html
│── style.css
│── script.js
│── README.md
└── images/
      └── coffee.jpg
      └── slider1.jpg
      └── slider2.jpg
```

---

## Features Implemented

### 1. Show/Hide Content (Reusable Function)

Each major section (About, Ingredients, Recipe, Contact) includes a button that toggles visibility.
Buttons are placed outside the sections to ensure they remain accessible even when a section is hidden.

**JavaScript concepts used:**

* Event listeners
* DOM style updates
* Function reuse

---

### 2. Light/Dark Mode Toggle

A floating button is placed at the top-right corner of the website.
It toggles between light mode and dark mode by adding or removing a CSS class from the body.

**Key concepts:**

* classList.toggle()
* Event handling
* Theme switching

---

### 3. Contact Form Validation

The contact form checks for:

* Empty fields
* Correct email format
* Minimum message length (if required)
* Error message display

If fields are invalid, the form does not submit and a message appears on the page.

---

### 4. Optional Image Slider

If included, the slider switches images using "Next" and "Previous" buttons.

**Key concepts:**

* Arrays
* Updating the image source
* Button event listeners

---

### 5. Local Storage (Optional)

Dark mode preference can be saved using localStorage, ensuring the theme remains consistent even after refreshing the page.

---

## JavaScript Concepts Used

* Variables and data types
* Functions
* Event handling (click, submit)
* DOM methods (getElementById, querySelector, style manipulation)
* Conditional statements
* Basic form validation
* Arrays (for slider)
* Local storage

---

## How to Run the Project

1. Download or clone the repository
2. Keep all files in the correct structure
3. Open **index.html** in any browser
4. Interact with the website features

---

## Testing and Debugging

The project has been tested for:

* Show/Hide functionality
* Smooth theme toggle between light and dark modes
* Proper input validation in the contact form
* Responsive button actions
* No console errors

Tested on:

* Google Chrome
* Microsoft Edge

---

## Recommended Screenshots for Submission

* Main homepage view
* Dark mode view
* Show/Hide section demonstration
* Contact form error message
* Contact form success message
* Image slider (if implemented)

---

## Conclusion

This project demonstrates how JavaScript can enhance user experience and bring interactivity to a static website.
It includes all the required features such as DOM manipulation, event listeners, form validation, and theme switching.
Cold Coffee Delight serves as a practical introduction to JavaScript for beginner-level web development.
