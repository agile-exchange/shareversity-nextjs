import { assert, describe, expect, it } from "vitest";
import { titleCase, headlineLength, validateStringNotEmpty, validateApplicationLink, validateCompensation, 
  validateFormData, validateEmail, validateEduEmailAccount, verifyPassword} from "../utils/validate";

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
  it("should throw return an error message, if an empty string is provided", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it('should throw an error message, if a long string of blanks is provided', () => {
    const input = '     ';
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it('should return true, if a non-empty string is provided', () => {
    const input = 'valid';
    var validationFn =  validateStringNotEmpty(input);
    expect(validationFn).toBe("true");
  });
});

describe("Validate Application Link", () => {
  it('should throw an error, if a valid http link is not provided', () => {
    const input = 'InvalidLink';
    var result = validateApplicationLink(input);
    expect(result).toBe("Invalid input - must be a valid http link");
  });

  it('should return true, if a valid http link is provided', () => {
    const input = 'https://validlink.com';
    const validationFn = validateApplicationLink(input);
    expect(validationFn).toBe("true");
  });
});

describe("Validate Compensation", () => {
  it('should throw an error Invalid number input, if compensation doesnt contain numbers', () => {
    const input = 'invalidCompensation';
    const validationFn = validateCompensation(input);
    expect(validationFn).toBe("Invalid number input");
  });

  it('should return true, if a number is provided', () => {
    const input = "$100";
    const validationFn = validateCompensation(input);
    expect(validationFn).toBe("true");
  });

  it('should not throw an error and return true, if a valid salary range is provided with a dollar', () => {
    const input = "$90,000";
    const validationFn = validateCompensation(input);
    expect(validationFn).toBe("true");
  });

  it('should not throw an error and return true, if a valid salary range is provided with hyphen', () => {
    const input = "$90,000-$100,00";
    const validationFn = validateCompensation(input);
    expect(validationFn).toBe("true");
  });
});

describe("validateFormData when user submits the form", () => {
  it('should throw an error message when job title is empty', () => {
    const inputObject = {
      "jobName": ""
    };

    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });

  it('should throw an error message when job description is empty', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": ''
    };

    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });

  it('should produce an error message when job category is not selected', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": 'Job description Example',
      "category": ''
    };
    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });
});

// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100);
}