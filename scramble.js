const scrambledFun = (str, breaker) => {
  const stringArr = str.split('');
  const stringArrLength = stringArr.length;

  for (let i = stringArrLength - 1; i > 0; i--) {
    if (stringArr[i] !== breaker) {
      const j = Math.floor(Math.random() * (i + 1));
      if (stringArr[j] !== breaker) {
        const tmp = stringArr[i];
        stringArr[i] = stringArr[j];
        stringArr[j] = tmp;
      }
    }
  }
  return stringArr.join('');
}

// invoke function for syntax scrambled
const synatxScrambledResult = scrambledFun('I have a car', ' ');
// invoke function for words scrambled
const wordScrambledResult = scrambledFun('Ihaveacar', '');

// console for syntax scrambled
console.log(synatxScrambledResult);
// console for words scrambled
console.log(wordScrambledResult);
