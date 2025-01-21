'use strict';

import { createGalleryCards } from './js/category.js';

const categories = [
  {
    filter: 'Muscles',
    name: 'abs',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/abs_bdi0dw.jpg',
  },
  {
    filter: 'Muscles',
    name: 'biceps',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/biceps_rnrxog.jpg',
  },
  {
    filter: 'Muscles',
    name: 'pectorals',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/pectorals_ihwzsc.jpg',
  },
  {
    filter: 'Muscles',
    name: 'serratus anterior',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/serratus_anterior_js6osa.jpg',
  },
  {
    filter: 'Muscles',
    name: 'lats',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/lats_zolre8.jpg',
  },
  {
    filter: 'Muscles',
    name: 'adductors',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/adductors_fmkryf.jpg',
  },
  {
    filter: 'Muscles',
    name: 'traps',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/traps_mshzl0.jpg',
  },
  {
    filter: 'Muscles',
    name: 'triceps',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/triceps_koatge.jpg',
  },
  {
    filter: 'Muscles',
    name: 'calves',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/calves_vzdk8o.jpg',
  },
  {
    filter: 'Muscles',
    name: 'levator scapulae',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/levator_scapulae_v7bfsw.jpg',
  },
  {
    filter: 'Muscles',
    name: 'quads',
    imgURL: 'https://ftp.goit.study/img/power-pulse/filters/quads_shix1m.jpg',
  },
  {
    filter: 'Muscles',
    name: 'cardiovascular system',
    imgURL:
      'https://ftp.goit.study/img/power-pulse/filters/cardiovascular_system_ooip0r.jpg',
  },
];

const categoryUlEl = document.querySelector('.category-list');
const categoryListEl = document.querySelector('.category-list');

categoryUlEl.innerHTML = createGalleryCards(categories);

const onCategoryListElClick = event => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  console.log(event.target.closest(`li`));
  console.log(event.target.closest(`li`).getAttribute('data-name'));
  console.log(event.target.closest(`li`).getAttribute('data-filter'));
};

categoryListEl.addEventListener('click', onCategoryListElClick);

console.log('Привіт Василь');
