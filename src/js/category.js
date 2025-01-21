'use strict';
export const createGalleryCards = categoriesArr => {
  return categoriesArr.reduce((acc, el) => {
    return (
      acc +
      `<li class="category-card" data-name="${el.name}" data-filter="${el.filter}">
      <img class="gallery-image"
           src="${el.imgURL}"
           alt="${el.name}"/>
            <div class="category-title">
              <h3>${el.name}</h3>
              <p>${el.filter}</p>
            </div>
          </li>`
    );
  }, '');
};
