function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.random() * (max - min) + min;
}

function checkStringLength(str, maxLenght) {
  if (str.Lenght <= maxLenght) {
    return true;
  }
  return false;
}

getRandomNumber(1, 10);
checkStringLength('Фотографии других пользователей', 20);

