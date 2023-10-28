const NUMBERS = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
];

const AVATAR = [
  'img/avatar-1.svg.',
  'img/avatar-2.svg.',
  'img/avatar-3.svg.',
  'img/avatar-4.svg.',
  'img/avatar-5.svg.',
  'img/avatar-6.svg.',
];

const ADRESS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTION = [
  'Интересное фото',
  'Природа',
  'Море',
  'Деревья',
  'Небо',
];

const LIKES = [
  '15',
  '12',
  '133',
  '46',
  '70',
  '200',
  '126',
  '199',
  '100',
  '10',
  '6',
  '12',
  '73',
  '84',
  '50',
  '96',
  '155',
  '108',
  '190',
  '1',
  '0',
  '111',
  '23',
  '55',
  '88',
];

const COMMENTS = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createID = () => {
  const randomIDIndex = getRandomInteger(0, NUMBERS.length - 1);
  const randomAdressIndex = getRandomInteger(0, ADRESS.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomCommentsIndex = getRandomInteger(0, COMMENTS.length - 1);
  const randomAvatarIndex = getRandomInteger(0, COMMENTS.length - 1);

  return {
    id: NUMBERS[randomIDIndex],
    url: ADRESS[randomAdressIndex],
    avatar: AVATAR [randomAvatarIndex],
    description: DESCRIPTION[randomDescriptionIndex],
    likes: LIKES[randomLikesIndex],
    message: COMMENTS[randomCommentsIndex],
  };
};

const similarComment = Array.from({length: 25}, createID);

console.log(similarComment);