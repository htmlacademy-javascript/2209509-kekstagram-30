import {DESCRIPTION} from './constants.js';
import {getRandomInteger} from './get-random-integer.js';
import {similarComment} from './create-comment.js';
import {renderMiniature} from './miniature.js';

const createID = () => {
  const randomIDIndex = getRandomInteger(0, 25);
  const randomAdressIndex = getRandomInteger(1, 25);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(1, 200);

  return {
    id: randomIDIndex,
    url: String(`photos/${ randomAdressIndex }.jpg`),
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomLikesIndex,
    comment: similarComment,
  };
};

const similarCommentId = () => Array.from(
  { length: 25 },
  (_, pictureIndex) => createID(pictureIndex + 1),
);

renderMiniature(similarCommentId());
