let arrow = document.getElementById('arrow');
let details = document.querySelector('.details');

arrow.addEventListener('click', slide, false);

function slide(){
    if (details.classList.contains('opened')) {
        details.classList.remove('opened');
        details.classList.add('closed');
    } else {
        details.classList.remove('closed');
        details.classList.add('opened');
    }
}

let arrow = document.getElementById('arrow');
let details = document.querySelector('.details');

arrow.addEventListener('click', slide, false);

function slide(){
    if (details.classList.contains('opened')) {
        details.classList.remove('opened');
        details.classList.add('closed');
    } else {
        details.classList.remove('closed');
        details.classList.add('opened');
    }
}