import {renderMiniature} from './miniature.js';
import {showPicture} from './picture.js';
const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniature = evt.target.closest('[data-miniature-id]');

    if (! miniature) {
      return;
    }
    evt.preventDefault();
    const miniaturelId = +miniature.dataset.miniatureId;
    const pictureData = pictures.find(({ id }) => id === miniaturelId);
    showPicture(pictureData);
  });

  renderMiniature(pictures);
};

export {renderGallery};
