# Image Gallery with Lightbox

## Project Overview

In this project, you’ll build an **interactive image gallery** where users can click on any image to view it in a fullscreen overlay (lightbox).

This is a common feature in modern websites—portfolios, e-commerce stores, and social platforms all use it. You’ll learn how to combine layout techniques with interactivity to create a polished user experience.

---

## The Problem

Displaying images in a grid is easy—but creating a **smooth, interactive viewing experience** is where things get interesting.

This project solves:

* How to display multiple images cleanly
* How to focus attention on a selected image
* How to handle user interactions (clicks, keyboard, navigation)

You are building something that answers:

> “How can users view images in a more immersive and intuitive way?”

---

## What You’ll Build

An image gallery with a lightbox overlay.

### Core Features

* A responsive **grid of images**
* Click an image → opens fullscreen overlay
* Overlay includes:

  * Enlarged image
  * Close button
  * Next / Previous navigation buttons

---

## Tech Stack

### 1. HTML

* Image grid structure
* Lightbox container (hidden by default)
* Navigation buttons (next, prev, close)

### 2. CSS

* Grid or Flexbox layout for gallery
* Overlay styling using `position: fixed`
* Centering images
* Transitions/animations (optional)

### 3. JavaScript

* Handling click events
* Updating the lightbox content dynamically
* Tracking current image index
* Keyboard event handling

---

## Key Concepts You’ll Practice

* CSS Grid / Flexbox for layouts
* Positioning (`fixed`, `absolute`, `z-index`)
* Event listeners (`click`, `keydown`)
* DOM manipulation
* Managing UI state (current image index)

---

## Suggested Structure

### HTML (Basic Idea)

```html id="g1a2b3"
<div class="gallery">
  <img src="img1.jpg" alt="Image 1">
  <img src="img2.jpg" alt="Image 2">
  <img src="img3.jpg" alt="Image 3">
</div>

<div class="lightbox hidden">
  <span class="close">&times;</span>
  <img class="lightbox-img" src="">
  <button class="prev">⟵</button>
  <button class="next">⟶</button>
</div>
```

---

### CSS Concepts to Use

* Grid layout:

```css id="c4d5e6"
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
```

* Lightbox overlay:

```css id="f7g8h9"
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

### JavaScript Responsibilities

* Detect which image was clicked
* Store the current image index
* Show the lightbox
* Update image source dynamically
* Navigate between images
* Close the lightbox

Example logic:

```javascript id="j1k2l3"
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showLightbox();
  });
});
```

---

## Keyboard Controls (Optional)

Enhance usability by supporting:

* `Escape` → Close lightbox
* `ArrowRight` → Next image
* `ArrowLeft` → Previous image

---

## Common Challenges

* Forgetting to track the current image index
* Lightbox not covering the full screen (z-index issues)
* Navigation breaking at first/last image
* Not removing event listeners properly
* Layout breaking on small screens

---

## Stretch Goals

Once the basics work, upgrade your project:

### UI/UX Improvements

* Add image captions
* Smooth fade or zoom animations
* Hover effects on gallery images

### Mobile Experience

* Swipe gestures (left/right navigation)
* Larger touch-friendly buttons

### Performance

* Lazy load images (`loading="lazy"`)
* Optimize image sizes

---

## Final Goal

You should end up with:

* A responsive image grid
* A smooth, functional lightbox
* Clean navigation experience (buttons + keyboard)

This project is a great step toward building:

* Portfolio websites
* Media-heavy apps
* Professional UI components

---

## Tip

Start simple:

1. Show images in a grid
2. Make clicking open the lightbox
3. Add navigation last

Trying to do everything at once will slow you down.

---

Happy building
