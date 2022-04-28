# Parentheses Balancing

The challenge is to write a alghoritm to reed a string from left to right and tell if the parentheses are balanced.



### How it works

In the beginning of the function, the key characters are setted at variable `keys`, so the characters at even position are the opening chars and the characters at odd position are the closing chars.

```javascript
...
function checkIfIsBalanced(string) {
  const keys = "(){}[]<>";
  let matches = [];
...
```



After that a `for` is created that goes through all the characters of the string and get the index of the current char in the string of keys.

```javascript
...
for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
  const character = string[stringIndex];
  const keyIndex = keys.indexOf(character);
...
```



If the current char is an opening one, it is added to `matches` and skips to the next iteration of `for`.

```javascript
...
const isOpeningChar = keyIndex % 2 === 0;
if (isOpeningChar) {
  matches.push({ index: stringIndex, character });
  continue;
}
...
```



Now it is checked if the current character matches with the last character added to `matches`. If so, skip to next iteration of `for`.

```javascript
...
const lastChar = matches.pop();
const lastCharKeyIndex = keys.indexOf(lastChar.character);
if (lastCharKeyIndex + 1 === keyIndex) continue;
...
```



If it arrived at the end of the `for`, an error message is returned.

```javascript
...
return {
  valid: false,
  message: errorMessage,
};
...
```



After the `for`, it is checked if left some char in `matches`. If so, an error message is returned.

```javascript
...
if (matches.length > 0) {
  return {
    valid: false,
    message: `missing closing of '${matches[0].character}' at position ${
      matches[0].index + 1
    }`,
  };
}
...
```



### How to run

Just run `node main.js` in the project folder.

To change the test string, change the variable in the first line 👍
