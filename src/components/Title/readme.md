==========================
Component: Title
==========================

📌 Overview:
The **Title** component displays big, bold animated text that appears beautifully as the user scrolls down the page. It gives your website headings a 3D-style animation that makes the words feel like they’re flipping and floating into place.

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Shows large headings, line by line.
- Animates each word with a cool 3D-style entrance when it comes into view.
- Automatically triggers the animation only when the user scrolls to that part of the page.
- Supports multi-line titles using `<br />` line breaks.

This makes your text look **alive**, **interactive**, and **highly polished**.

--------------------------------------------
📂 How It Works (For Non-Coders):
--------------------------------------------

1. The text is split into lines and words.
2. Each word starts out invisible and slightly rotated in 3D.
3. When the user scrolls down and the title comes into view:
   - Each word **fades in** and **rotates into place**, one by one.
4. The animation plays once when the title enters, and can reverse if the user scrolls back up.

✨ This gives a cinematic, professional feel to your main headings — perfect for portfolios, landing pages, or product introductions.

--------------------------------------------
🧾 How to Use (For Developers):
--------------------------------------------

- Props:
  - `title` (string): the main text content, supports `<br />` for line breaks.
  - `additionClasses` (string): any extra CSS classes to style the wrapper.

- Structure:
  - The title is split into lines and words.
  - Each word is wrapped in a `<span>` with the class `animated-word`.
  - Animation is handled using **GSAP** and **ScrollTrigger**.
  - GSAP 3D properties like `rotateX`, `rotateY`, and `z` are used for a 3D entry effect.

- Example usage:
  ```jsx
  <Title
    title={"We build <br /> amazing digital experiences"}
    additionClasses="text-center"
  />
