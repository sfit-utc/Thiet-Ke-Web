let images = [
    './img/anh1.jpg',
    "./img/anh2.jpg",
    './img/anh3.jpg',
    "./img/anh4.jpg",
];
const imageSlide = document.getElementById("slide_img");
let index = 0;

function fnPre() {
    event.preventDefault(); // tranhs load lai trang
    index -= 1;
    if (index < 0) index = 3;
    console.log(index);
    imageSlide.src = images[index];
}

function fnNext() {
    event.preventDefault();
    index += 1;
    if (index > 3) index = 0;
    imageSlide.src = images[index];
}