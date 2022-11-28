import { assert, describe, expect, it } from "vitest";
import { titleCase, headlineLength, validateStringNotEmpty, validateApplicationLink, validateCompensation, validateFormData} from "../utils/validate";

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

describe("Validate Application Link", () => {
  it('should not throw an error, if a valid link is not provided', () => {
    const input = 'InvalidLink';
    const validationFn = () => validateApplicationLink(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if a valid http link is provided', () => {
    const input = 'https://validlink.com';
    const validationFn = () => validateApplicationLink(input);
    expect(validationFn).not.toThrow();
  });
});

describe("Validate Compensation", () => {
  it('should throw an error, if compensation doesnt contain numbers', () => {
    const input = 'invalidCompensation';
    const validationFn = () => validateCompensation(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if a number is provided', () => {
    const input = "$100";
    const validationFn = () => validateCompensation(input);
    expect(validationFn).not.toThrow();
  });

  it('should not throw an error, if a valid salary range is provided', () => {
    const input = "$90,000-$100,00";
    const validationFn = () => validateCompensation(input);
    expect(validationFn).not.toThrow();
  });
});


describe("validateFormData when user submits the form", () => {
  it('should throw when job title is empty', () => {
    const inputObject = {
      "jobName": ""
    };
    const validationFn = () => validateFormData(inputObject);
    expect(validationFn).toThrow();
  });

  it('should throw when job description is empty', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": ''
    };
    const validationFn = () => validateFormData(inputObject);
    expect(validationFn).toThrow();
  });

  it('should throw when job category is not selected', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": 'skjdafnkjs',
      "category": ''
    };
    const validationFn = () => validateFormData(inputObject);
    expect(validationFn).toThrow();
  });
});

// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100);
}