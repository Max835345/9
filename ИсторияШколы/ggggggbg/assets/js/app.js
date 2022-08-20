"use strict";

const blok = document.querySelectorAll('.blok');
const ins = document.querySelectorAll('.ins_none');
const main_inf = document.querySelectorAll('.main_inf');
const click = document.querySelectorAll('.click');

blok.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('active');
    });
});

// ins.forEach(i =>{
//     i.classList.toggle('ins');
//     i.classList.toggle('ins_none');
// });

main_inf.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('none');
        i.classList.toggle('main_inf');
    });
});