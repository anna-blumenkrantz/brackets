module.exports = function check(str, bracketsConfig) {

   let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      // Check if the current character is an opening bracket
      if (str[i] === bracketsConfig[j][0]) {
        stack.push(str[i]);
        break;
      }
      // Check if the current character is a closing bracket
      if (str[i] === bracketsConfig[j][1]) {
        if (stack.length === 0) {
          return false;
        }
        // Check if the last opened bracket matches the current closing bracket
        if (stack[stack.length - 1] !== bracketsConfig[j][0]) {
          return false;
        }
        stack.pop();
        break;
      }
    }
  }
  return stack.length === 0;
}