==========================
Component: ImgReveal
==========================

📌 Overview:
ImgReveal is a React component that displays a grid of images that animate into view using a reveal effect as the user scrolls. It uses GSAP and ScrollTrigger to animate the `clip-path` of each image, giving a clean and elegant scrolling experience.

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Displays rows of images (alternating left and right).
- Applies a smooth clipping reveal animation to each image when it enters the viewport.
- Handles the animation with GSAP and ScrollTrigger.
- Dynamically generates rows based on the `imgRows` prop passed to the component.

--------------------------------------------
📂 How It Works:
--------------------------------------------

1. The component receives an array of image row objects (`imgRows`), each containing:
   - `src`: path to the image (must be accessible from `public/`)
   - `alt`: alt text for the image
   - `position`: either `"left"` or `"right"` to control image alignment

2. Each image is placed inside a `.img-wrapper` container (`left` or `right`) to target it with different ScrollTrigger settings.

3. As the user scrolls:
   - The image clip-path animates from fully hidden to fully visible.
   - The trigger and scroll position are adjusted based on image alignment.

4. A check is made on first render: if an image is already visible on load, it animates in immediately.

--------------------------------------------
🧾 How to Use:
--------------------------------------------

- Folder contents:
  - `index.jsx` (main component logic)
  - `index.css` (styling for wrappers and layout)
  - `README.txt` (this file)

- Required dependencies:
  - `gsap`
  - `gsap/ScrollTrigger`

- Ensure your images are stored inside the `public/` folder (e.g. `public/images/img1.webp`).

- Sample `imgRows` prop structure:
  ```jsx
  const imgRows = [
    {
      src: "/images/reveal-1.webp",
      alt: "A modern chair",
      position: "left"
    },
    {
      src: "/images/reveal-2.webp",
      alt: "Minimalist desk",
      position: "right"
    },
    // More rows...
  ];
