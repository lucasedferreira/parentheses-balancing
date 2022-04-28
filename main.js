const string = "(teste){b<alance(am)e>n[]to}(de(parenteses))";

function checkIfIsBalanced(string) {
  const keys = "(){}[]<>";
  let matches = [];

  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    const character = string[stringIndex];
    const keyIndex = keys.indexOf(character);

    if (keyIndex === -1) continue;

    const isOpeningChar = keyIndex % 2 === 0;
    if (isOpeningChar) {
      matches.push({ index: stringIndex, character });
      continue;
    }

    const errorMessage = `unexpected character '${character}' found at position ${
      stringIndex + 1
    }`;

    if (matches.length === 0) {
      return {
        valid: false,
        message: errorMessage,
      };
    }

    const lastChar = matches.pop();
    const lastCharKeyIndex = keys.indexOf(lastChar.character);
    if (lastCharKeyIndex + 1 === keyIndex) continue;

    return {
      valid: false,
      message: errorMessage,
    };
  }

  if (matches.length > 0) {
    return {
      valid: false,
      message: `missing closing of '${matches[0].character}' at position ${
        matches[0].index + 1
      }`,
    };
  }

  return {
    valid: true,
    message: "everything seems ok ◕‿↼",
  };
}

const result = checkIfIsBalanced(string);
console.log(result);
