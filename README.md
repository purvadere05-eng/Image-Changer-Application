Image Changer Application

A simple and interactive web application built using HTML, CSS, and JavaScript DOM manipulation. The application dynamically changes the displayed food image and its corresponding title when the user moves the mouse over the image.

🚀 Live Demo

You can access the live application here:

Live Demo:
https://purvadere05-eng.github.io/Image-Changer-App/

The application can be deployed using GitHub Pages from the repository's main branch.

📌 Features

Dynamic image changing using JavaScript

Dynamic title/text changing

Mouseover event handling

DOM element selection using querySelector()

Event handling using addEventListener()

Uses JavaScript arrays and objects to manage image data

Automatically cycles through multiple food images

Simple and responsive user interface

🛠️ Technologies Used

HTML5 – Structure of the application

CSS3 – Styling and layout

JavaScript – DOM manipulation and event handling

📂 Project Structure

Image-Changer-App/
│
├── index.html
├── script.js
│
└── Images/
    ├── food1.jpg
    ├── food2.jpg
    └── food3.jpg

⚙️ How to Run Locally

Clone the repository:

git clone https://github.com/purvadere05-eng/Image-Changer-App.git

Open the project folder.

Open index.html in your web browser.

Move the mouse over the image to see the image and title change dynamically.

💡 How It Works

The application uses JavaScript to select the image and title elements from the DOM:

let image = document.querySelector("#foodImage");
let imageTitle = document.querySelector("#imageTitle");

A mouseover event detects when the mouse moves over the image:

image.addEventListener("mouseover", () => {
    // Change image and title
});

The image source and title are updated dynamically using JavaScript.

📚 Learning Summary

Through this project, I practiced the fundamentals of JavaScript DOM manipulation, including:

querySelector()

addEventListener()

mouseover events

Arrays and objects

Dynamic src attribute modification

Dynamic textContent modification

Basic event-driven programming

🎯 Purpose

This project was developed as part of my JavaScript learning journey to strengthen my understanding of DOM manipulation and JavaScript events through practical implementation.

👩‍💻 Author

Purva Dere

GitHub:
https://github.com/purvadere05-eng