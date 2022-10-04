function getRandomArbitrary(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.random() * (max - min) + min;
}

function LenghtStr(str, maxlenght) {
  if (str.lenght <= maxlenght) {
    return true;
  }
  else {
    return false;
  }
}
