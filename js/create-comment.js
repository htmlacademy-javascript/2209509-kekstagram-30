import {COMMENTS} from './constants.js';
import {getRandomInteger} from './get-random-integer.js';

export const createComment = () => {
  const randomIDIndex = getRandomInteger(0, 25);
  const randomAdressIndex = getRandomInteger(1, 25);
  const randomCommentIndex = getRandomInteger(0, COMMENTS.length - 1);
  const randomLikesIndex = getRandomInteger(1, 200);

  return {
    id: randomIDIndex,
    url: String(`photos/${ randomAdressIndex }.jpg.`),
    message: COMMENTS[randomCommentIndex],
    likes: randomLikesIndex,
  };
};

export const similarComment = Array.from({length: getRandomInteger(1, 30)}, createComment);
