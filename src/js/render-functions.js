export function renderGallery(images) {
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = ""; // Очищаємо попередні результати
  
    const markup = images
      .map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
          `<div class="gallery-item">
            <a href="${largeImageURL}" target="_blank">
              <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
            </a>
            <div class="image-info">
              <p><strong>Likes:</strong> ${likes}</p>
              <p><strong>Views:</strong> ${views}</p>
              <p><strong>Comments:</strong> ${comments}</p>
              <p><strong>Downloads:</strong> ${downloads}</p>
            </div>
          </div>`
      )
      .join("");
  
    gallery.innerHTML = markup;
  }