import {COMMENTS} from './constants.js';

export const createComment = (arr) => {
  const commentsArr = new Set();
  const quantity = COMMENTS(1, 30);
  while (commentsArr.size < quantity) {
    commentsArr.add(COMMENTS(arr));
  }
  return commentsArr;
};
