import {DESCRIPTION} from './constants.js';
import {getRandomInteger} from './get-random-integer.js';
import {createComment} from './create-comment.js';

const createID = () => {
  const randomIDIndex = getRandomInteger(0, 25);
  const randomAdressIndex = getRandomInteger(1, 25);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(1, 200);
  const randomAvatarIndex = getRandomInteger(1, 6);

  return {
    id: randomIDIndex,
    url: String(`photos/${ randomAdressIndex }.jpg.`),
    avatar: String(`img/avatar-${ randomAvatarIndex }.svg.`),
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomLikesIndex,
    comment: createComment,
  };
};

const similarCommentId = Array.from({length: 25}, createID);

console.log(similarCommentId);
