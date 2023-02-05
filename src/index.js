module.exports = function check(str, bracketsConfig) {

  // console.log('Brackets issue:');
  //store open brackets 
  const OPEN_BRACKETS = bracketsConfig.map((bracketPair) => bracketPair[0]);
  // console.log('OPEN_BRACKETS' +OPEN_BRACKETS);
  //make a map of pairs  
  const BRACKETS_PAIR = {};

    for (const bracketPair of bracketsConfig) {
      BRACKETS_PAIR[bracketPair[0]] = bracketPair[1];
    } 
  // const BRACKETS_PAIR = new Map(bracketsConfig.map(([open, close]) => [open, close]));
  // console.log('BRACKETS_PAIR' +JSON.stringify(BRACKETS_PAIR));
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      // console.log('cur** '+currentSymbol);
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
        // console.log('stack push ***'+stack);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];
        // console.log('topElement** '+topElement);

        // if (BRACKETS_PAIR[currentSymbol] === topElement) {
        if (BRACKETS_PAIR[topElement] === currentSymbol) {
          // console.log('====** '+BRACKETS_PAIR[currentSymbol] === topElement);
          stack.pop();
          // console.log('POP'+stack);
        } else {
          return false;
        }
      }
    }
 return stack.length === 0;

}
// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// check('||', config4);