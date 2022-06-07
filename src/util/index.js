export function textConvertor(text) {
  return text.replaceAll("%20", " ").replaceAll("%27", " ").replaceAll("%22", " ").replaceAll("%", " ").replaceAll("3F", " ")
}

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
