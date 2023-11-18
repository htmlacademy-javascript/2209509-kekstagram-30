const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniature = ({
  url,
  description,
  likes,
  comment,
  id
}) => {
  const miniature = miniatureTemplate.cloneNode(true);

  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textContent = comment.length;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniature.dataset.miniatureId = id;

  return miniature;
};

const renderMiniature = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createMiniature(picture);
    fragment.append(miniature);
  });
  container.append(fragment);
};
export {renderMiniature};
