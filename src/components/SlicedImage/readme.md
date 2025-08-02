==========================
Component: SlicedImage
==========================

📌 Overview:
The **SlicedImage** component creates a unique visual effect where a single image is split into multiple vertical slices. These slices appear one by one as the user scrolls down, creating a smooth and eye-catching reveal animation.

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Splits one image into **16 vertical slices**.
- Hides the image at first.
- As the user scrolls and the image comes into view, each slice **fades in** smoothly and quickly one after another.
- The result feels like the image is building itself in real time.

--------------------------------------------
📂 How It Works (for Non-Coders):
--------------------------------------------

1. The component takes **one image** and breaks it into **multiple columns** (like slicing it into narrow pieces).
2. Each piece starts out invisible.
3. As you scroll and reach this part of the page:
   - The slices **fade in** one after another.
   - It gives the impression of the image being revealed or loaded piece by piece.
4. This effect is **automatic** — you don’t need to click anything. It plays once when the image becomes visible.

This makes the page feel interactive and modern, without needing any user input.

--------------------------------------------
🧾 How to Use (for Developers):
--------------------------------------------

- Props:
  - `width`: sets how wide the full image container should be.
  - `aspectRatio`: keeps the image slices in proper proportion (e.g. `9 / 16`).
  - `src`: the path to the actual image.

- Structure:
  - Internally creates **16 slices** using `Array.from({ length: 16 })`.
  - Each slice is styled with `background-image` using the `src` provided.
  - Animation is done using **GSAP** when the component becomes visible in the viewport using the **Intersection Observer API**.

- Example usage:
  ```jsx
  <SlicedImage
    width="200px"
    aspectRatio="9 / 16"
    src="/images/my-image.webp"
  />
