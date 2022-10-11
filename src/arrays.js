const getNthElement = (index, array) => {
  return array[index%array.length]
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  console.log(array.push(element));
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter( x=> x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index , 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
   const vowels = /^[aeiou]/gi;
  const filter = strings.filter(result => vowels.test(result));
  return filter;
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '')
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};


const sortByLastLetter = strings => {
  
  return strings.sort((x,y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length -1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
