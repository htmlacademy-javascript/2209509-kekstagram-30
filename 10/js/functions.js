// Функция для проверки длины строки

function checkingString(string, length) {
  return string.length <= length;
}

// Cтрока короче 20 символов
checkingString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkingString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkingString('проверяемая строка', 11); // false

const isPalidrom = (rawString) => {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  const reverse = string.split('').reverse().join('');
  return string === reverse;
};

// Строка является палиндромом
isPalidrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalidrom('ДовОд'); // true
// Это не палиндром
isPalidrom('Кекс'); // false

const number = (arg) => {
  const string = arg.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

number('2023 год'); // 2023
number('ECMAScript 2022'); // 2022
number('1 кефир, 0.5 батона'); // 105
number('агент 007'); // 7
number('а я томат'); // Nan
