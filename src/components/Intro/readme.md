==========================
Component: Intro
==========================

📌 Overview:
The **Intro** component creates a full-screen animated welcome effect that plays automatically when someone visits the website. It displays the word **"nexum"** in a stylish way — each letter fades in, then out, followed by a smooth transition that uncovers the rest of the page.

--------------------------------------------
🎯 What It Does:
--------------------------------------------

- Shows a black fullscreen with 4 vertical columns.
- Animates the word **“nexum”** letter by letter.
- Each letter slides in from the bottom and then slides out to the top.
- Once the animation is complete, the intro screen slides up to reveal the actual website content.

--------------------------------------------
📂 How It Works (For Non-Coders):
--------------------------------------------

1. The screen starts fully covered with 4 black sections.
2. The word “nexum” appears at the center:
   - Each letter comes in one after another.
   - Then each letter disappears in the same smooth way.
3. After that, the 4 black columns slide up and off the screen.
4. The main website becomes visible underneath.

✨ The entire animation happens on its own — no clicks or taps needed.

--------------------------------------------
🧾 How to Use (For Developers):
--------------------------------------------

- Uses **GSAP** for animations.
- Controlled by a single `onFinish` function, which tells the main app when the intro is done and it's time to show the rest of the site.
- The animated word is generated from a string using:
  ```js
  Array.from("nexum")
