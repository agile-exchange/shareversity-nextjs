import { assert, describe, expect, it } from "vitest";
import { titleCase, headlineLength, validateStringNotEmpty} from "../utils/validate";

describe("validate job title", () => {
  it("should have return title case", () => {
    expect("Data Analyst").toBe(titleCase("data analyst"));
  });
});

describe("validate headline input", () => {
  it("should return 100 characters only", () => {
    expect(return100a()).toBe(headlineLength(return100a()));
  });
});

describe("validateStringNotEmpty", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it('should throw an error if a long string of blanks is provided', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = 1;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});

// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100);
}

// describe("add 2+2", () => {
//   it("should return 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
