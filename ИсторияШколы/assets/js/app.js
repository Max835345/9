"use strict";

const blok = document.querySelector('.blok');
const p = document.querySelector('.par');
const img = document.querySelector('img');
const title = document.querySelector('.title_sold');
const main_inf = document.querySelector('.main_inf')
const blok_orn = document.querySelector('.blok_orn');
const p_orn = document.querySelector('.par_orn');
const img_orn = document.querySelector('.img_none_orn');
const title_orn = document.querySelector('.title_sold_orn');
const main_inf_orn = document.querySelector('.main_inf_orn')

blok.addEventListener('click',() => {
    blok.classList.toggle('active');
    p.classList.toggle('active_txt');
    img.classList.toggle('img');
    title.classList.toggle('active_title');
    main_inf.classList.toggle('main_inf');
    main_inf.classList.toggle('none');
});

blok_orn.addEventListener('click',() => {
    blok_orn.classList.toggle('active_orn');
    p_orn.classList.toggle('active_txt_orn');
    p_orn.classList.toggle('par_orn');
    img_orn.classList.toggle('img_orn');
    title_orn.classList.toggle('active_title_orn');
    title_orn.classList.toggle('title_sold_orn');
    main_inf_orn.classList.toggle('main_inf_orn');
    main_inf_orn.classList.toggle('none');
});
