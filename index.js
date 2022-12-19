const btnNext = document.querySelector('.container-slider__btn-next');
const btnPrev = document.querySelector('.container-slider__btn-prev');
const img = [...document.querySelectorAll('.container-slider__item')];
let count = 0;
checkBtn(count);
btnNext.addEventListener('click', () => {
    if (count + 1 < img.length) {
        img[count].classList.remove('container-slider__active');
        img[count + 1].classList.add('container-slider__active');
        count++;
    }
    checkBtn(count);
});
btnPrev.addEventListener('click', () => {
    if (count > 0) {
        img[count].classList.remove('container-slider__active');
        img[count - 1].classList.add('container-slider__active');
        count--;
    }
    checkBtn(count);
});
function checkBtn (count) {
    if (count === 0) {
        btnPrev.classList.add('button__none');
    } else if (count === img.length - 1) {
        btnNext.classList.add('button__none');
    } else {
        btnNext.classList.remove('button__none');
        btnPrev.classList.remove('button__none');
    }
}