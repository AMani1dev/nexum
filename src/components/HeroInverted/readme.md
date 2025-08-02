==========================
Component: HeroInverted
==========================

📌 Overview:
This component is part of a web app built with React and Bootstrap. It creates a fullscreen section with a background video and a floating logo labeled "nexum".

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Displays a full-height background video that loops, plays automatically, and is muted.
- Overlays a "nexum" logo in the center-top area of the screen.
- The layout uses Bootstrap utility classes and custom CSS from index.module.css.

--------------------------------------------
📂 How It Works:
--------------------------------------------

1. The component uses a `<video>` element to show a background video.
2. The video source is located at: `/videos/hero-1.mp4`.
3. It uses a fallback poster image: `/images/image-reveal/img-reveal-2.webp`.
4. The video fills the entire component area using Bootstrap's `w-100`, `h-100`, and `object-fit-cover`.
5. The "nexum" logo is styled with utility classes and a custom class `logo__wrapper` from the CSS file.

🗂️ Note: All video and image assets are placed inside the **`public/` folder** of the React project. The paths in the component assume that `/videos/` and `/images/` are directly accessible from the root.

--------------------------------------------
🧾 How to Use:
--------------------------------------------

- Make sure your project includes:
  - This component file (`index.jsx`)
  - The associated CSS module (`index.module.css`)
  - A `public/` folder with:
    - `public/videos/hero-1.mp4`
    - `public/images/image-reveal/img-reveal-2.webp`

- Import and use the component in your React project:
  ```jsx
  import HeroInverted from "./components/HeroInverted";
  ...
  <HeroInverted />
