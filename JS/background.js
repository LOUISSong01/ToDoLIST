const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomground = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${randomground}`;

bgImage.classList.add("bgStyle");
document.body.prepend(bgImage);
