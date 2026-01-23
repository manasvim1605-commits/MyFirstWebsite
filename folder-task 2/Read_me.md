# 🌐 Week 2: CSS – Styled Portfolio Website

This project is part of **Week 2 – CSS Styling**, focused on learning and implementing essential CSS concepts to create a clean, responsive, and visually appealing portfolio website.

---

## 📌 **Project Overview**

The goal of this project is to apply core CSS concepts such as selectors, box model, positioning, Flexbox/Grid, responsive design, and interactive effects to build a fully styled portfolio webpage.

This project enhances your understanding of how CSS controls layout, colors, typography, spacing, and responsiveness across devices.

---

## 🧩 **Features Implemented**

✔ External CSS file
✔ Multiple CSS selectors (element, class, ID, pseudo-class)
✔ Hover effects on buttons and links
✔ Responsive layout using media queries
✔ Flexbox or Grid for layout
✔ Custom color scheme using CSS variables
✔ Google Fonts integration
✔ Styled navigation bar, text, images, and buttons

---

## 🛠️ **Tech Stack**

* **HTML5**
* **CSS3**
* **Google Fonts**
* **Flexbox / Grid**
* **Responsive Design**

---

## 📁 **Project Structure**

```
/project-folder
│── index.html
│── style.css
│── README.md
│
├── images/
│     └── (project images)
│
└── screenshots/
      └── (screenshots for documentation)
```

---

## 📚 **CSS Concepts Used**

### 1. **Selectors**

* **Element selectors:** `h1`, `p`, `a`
* **Class selectors:** `.container`, `.btn`
* **ID selectors:** `#header`
* **Pseudo-classes:** `a:hover`, `.btn:hover`

### 2. **CSS Properties**

* Text: `font-size`, `font-family`, `color`
* Background: `background-color`, `background-image`
* Box model: `margin`, `padding`, `border`
* Layout: `display`, `flex`, `grid`, `justify-content`, `align-items`

### 3. **Box Model**

Understanding:

* Content → Padding → Border → Margin

### 4. **Positioning**

* `static`, `relative`, `absolute`, `fixed` basics

### 5. **Responsive Design**

* Media queries (`@media (max-width: 768px)`)

### 6. **CSS Variables**

Used to maintain consistent color themes:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
}
```

---

## 🎨 **Design Decisions**

* Chosen a **modern blue + dark theme** for a clean and professional look
* Used **Google Fonts** to improve typography
* Flexbox used for responsive header and layout
* Hover animations added for better interactivity
* Media queries included for mobile screens

---

## 📱 **Responsiveness Approach**

* Navigation bar switches to column layout on smaller screens
* Images scale automatically using `max-width: 100%`
* The layout adapts using Flexbox and simplified stacking of elements

---

## 🛠️ **Sample Code Snippet**

```css
/* Reset default styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Color scheme */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
}

/* Header styling */
header {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive design */
@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
}
```

---

## 🔧 **Setup Instructions**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-css-week2.git
   ```
2. Open the folder in VS Code
3. Open **index.html** in a browser
4. Edit `style.css` to customize the design

---

## 🖼️ **Visual Documentation**

Add screenshots inside the **screenshots/** folder.

Example:

* Homepage view
* Navigation bar
* Mobile responsive layout
* Hover effect demo

---

## 🧪 **Testing Evidence**

Tested across:

* Chrome
* Edge
* Mobile view (DevTools)

Validation:

* Checked responsive breakpoints
* Verified hover effects
* Checked layout spacing and alignment
* No CSS errors in browser console

---

## ✅ **Quality Standards Checklist**

### ✔ Project Overview

### ✔ Clean File Structure

### ✔ External CSS File

### ✔ 3+ CSS Selectors

### ✔ Hover Effects

### ✔ Responsive Layout

### ✔ Flexbox/Grid Usage

### ✔ Custom Fonts & Variables

### ✔ Visual Documentation

### ✔ Testing Evidence

