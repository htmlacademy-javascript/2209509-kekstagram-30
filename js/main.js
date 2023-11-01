const DESCRIPTION = [
  'Интересное фото',
  'Природа',
  'Море',
  'Деревья',
  'Небо',
  'Животные',
  'Закат',
  'Необычное фото',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = () => [
  'Комментарий',
];

const createID = () => {
  const randomIDIndex = getRandomInteger(0, 25);
  const randomAdressIndex = getRandomInteger(1, 25);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(1, 200);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const similarComment = Array.from({length: getRandomInteger(1, 30)}, createComment);

  return {
    id: randomIDIndex,
    url: String(`photos/${ randomAdressIndex }.jpg.`),
    avatar: String(`img/avatar-${ randomAvatarIndex }.svg.`),
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomLikesIndex,
    comment: similarComment,
  };
};

const similarCommentId = Array.from({length: 25}, createID);

console.log(similarCommentId);
