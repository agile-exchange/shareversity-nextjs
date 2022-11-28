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
    console.log("here");
    throw new Error('Invalid input - must not be empty');
  }
}

export function validateApplicationLink(link){
  if(!link.startsWith("http")){
    throw new Error('Invalid input - must not be empty');
  }
}

export function validateCompensation(comp){
  var numPattern = /^[0-9\-]+$/;

  const result = numPattern.test(comp);

  if(!(result || comp.includes("$") || comp.includes(","))){
    throw new Error('Invalid number input.');
  }
}

export function validateFormData(input) {
  // validate job name
  validateStringNotEmpty(input.jobName);

  // validate Job Description
  validateStringNotEmpty(input.description);

  validateStringNotEmpty(input.category);
}