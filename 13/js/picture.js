import {renderComments, initCommentList} from './comment.js';
const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bigPictureElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

const onClosePictureButtonClick = () => {
  hidePicture();
};

function onDocumentKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({url, description, likes}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);

  renderComments(pictureData.comment);

  initCommentList();

  renderPicture(pictureData);
};

closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);

export {showPicture};
