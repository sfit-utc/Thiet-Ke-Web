const images = document.getElementsByClassName('img');

let index = 0; // thu tu img hien thi

function showImage(index) {
    // an tat ca cac img
    for (let i = 0; i < images.length; i++) {
        // kiem tra xem co class hidden hay khong co thi them
        if (!images[i].classList.contains('hidden')) {
            images[i].classList.add('hidden');
        }
    }
    // hien thi img theo index
    images[index].classList.remove('hidden');
}

function next() {
    index += 1;
    if (index >= images.length) {
        index = 0;
    }
    showImage(index);
}

function prev() {
    index -= 1;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage(index);
}