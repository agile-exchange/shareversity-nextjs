// create a function that capitalizes the first letter of every word in a string except for the words "in" and "of"
export function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word === "in" || word === "of" || word === "the") {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
}

// create a function that checks if that a string is less than 100 characters long and returns only the first 100 characters if not
export function headlineLength(str) {
  return str.length > 100 ? str.substring(0, 97) + "..." : str;
}

export function validateStringNotEmpty(str) {
  if (str.trim().length === 0) {
    throw new Error('Invalid input - must not be empty');
  }
}
