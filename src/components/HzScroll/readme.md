==========================
Component: HzScroll
==========================

📌 Overview:
HzScroll is a React component that uses GSAP and ScrollTrigger to create a horizontal scrolling animation while scrolling vertically. It animates a heading and a series of cards with custom transforms and smooth effects.

It is designed to deliver a dynamic, modern scrolling experience that draws attention to text and visual content.

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Pins a full-screen section during vertical scroll and transforms it into a horizontal scroll experience.
- Moves a fluid heading text horizontally based on scroll progress.
- Animates individual cards with position, rotation, and opacity transitions using GSAP.
- Cards fade in and move in a choreographed sequence using configurable transform values.

--------------------------------------------
📂 How It Works:
--------------------------------------------

1. The component listens to scroll events using `ScrollTrigger.create`.
2. It pins the section while scrolling vertically for 6x the height of the viewport.
3. The heading (text) moves left as you scroll down, creating a horizontal scroll illusion.
4. Each card uses its transform data to animate:
   - `xPercent` (left-to-right movement)
   - `yPercent` (vertical movement)
   - `rotation` (card rotation)
   - `opacity` (fade in/out)
5. Animations are handled using GSAP and limited to the component’s scope via `useGSAP({ scope })`.

--------------------------------------------
🧾 How to Use:
--------------------------------------------

- Folder contents:
  - `index.jsx` (main logic)
  - `index.module.css` (custom styles)
  - `README.txt` (this file)

- You must have the following installed:
  - `gsap`
  - `@gsap/react`
  - `bootstrap` (for utility classes)

- Assets:
  - The cards reference images via `imgSrc`, which must point to existing images (e.g., inside the `public/images/` folder).

- Example use:
  ```jsx
  import HzScroll from "./components/HzScroll";

  const cards = [
    {
      id: 1,
      imgSrc: "/images/cards/card1.webp",
      title: "Card Title",
      description: "Short description here.",
      transforms: [
        [0, 10, 30, 70],        // yPercent values
        [0, 10, -10, 5],        // rotation values
      ]
    },
    // more cards...
  ];

  <HzScroll
    fluidText="Scroll Through Our Story"
    cardsInfo={cards}
    additionalClasses="bg-white text-dark"
  />
