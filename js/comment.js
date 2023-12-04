const bigPictureElement = document.querySelector('.big-picture');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const CommentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentsElement = document
  .querySelector('#comment')
  .content
  .querySelector('.social__comment');

const createComment = ({ avatar, name, message }) =>{
  const newComment = commentsElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = (comment) => {
  const fragment = document.createDocumentFragment();
  comment.forEach((item) => {
    const comments = createComment(item);
    fragment.append(comments);
  });
  commentsListElement.append(fragment);
};

const initCommentList = () => {
  CommentCountElement.classList.add('hidden');
  commentLoaderElement.classList.add('hidden');
};

export { renderComments, initCommentList };

