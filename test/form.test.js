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

  // it('should throw an error with a message that contains a reason (must not be empty)', () => {
  //   const input = '';
  //   const validationFn = () => validateStringNotEmpty(input);
  //   expect(validationFn).toThrow(/must not be empty/);
  // });

  it('should throw an error if a long string of blanks is provided', () => {
    const input = '';
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  // it('should throw an error if any other value than a string is provided', () => {
  //   const inputNum = 1;
  //   const inputBool = 1;
  //   const inputObj = {};

  //   var validationFnNum =  validateStringNotEmpty(inputNum);
  //   var validationFnBool = validateStringNotEmpty(inputBool);
  //   var validationFnObj = validateStringNotEmpty(inputObj);

  //   expect(validationFnNum).toBe("Invalid input - must not be empty");
  //   expect(validationFnBool).toBe("Invalid input - must not be empty");
  //   expect(validationFnObj).toBe("Invalid input - must not be empty");
  // });

  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    var validationFn =  validateStringNotEmpty(input);
    expect(validationFn).toBe("true");
  });
});

describe("Validate Application Link", () => {
  it('should not throw an error, if a valid link is not provided', () => {
    const input = 'InvalidLink';
    var result = validateApplicationLink(input);
    expect(result).toBe("Invalid input - must be a valid http link");
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

    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });

  it('should throw when job description is empty', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": ''
    };

    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });

  it('should produce an error when job category is not selected', () => {
    const inputObject = {
      "jobName": "Valid Job Name",
      "description": 'Job description Example',
      "category": ''
    };
    var result = validateFormData(inputObject);
    expect(result).toBe("Invalid input - must not be empty"); 
  });
});

describe("validate the students email", () => {
  it('should return false, if email is not valid', () => {
    const input = 'test@test@gmail.com';
    var result = validateEmail(input);
    expect(result).toBe(false);
  });

  it('should return false, if email is empty', () => {
    const input = '';
    var result = validateEmail(input);
    expect(result).toBe(false);
  });

  it('should return error false, if email doesnt contain @', () => {
    const input = 'testgmail.com.edu';
    var result = validateEmail(input);
    expect(result).toBe(false);
  });

  it('should return error false, if email doesnt contain edu', () => {
    const input = 'test@gmail.com';
    var result = validateEduEmailAccount(input);
    expect(result).toBe(false);
  });

  it('should return true, if email is valid', () => {
    const input = 'test@gmail.edu';
    var result = validateEmail(input);
    expect(result).toBe(true);
  });
});

describe("validate password", () => {
  it('should return error, if password is empty', () => {
    const input = '';
    var result = verifyPassword(input);
    expect(result).toBe("Password cant be empty");
  });

  it('should return error, if password is length is less than 8', () => {
    const input = 'passw';
    var result = verifyPassword(input);
    expect(result).toBe("Password length must be atleast 8 characters");
  });

  it('should return error, if password is length is more than 15', () => {
    const input = 'passwordpasswordpassword';
    var result = verifyPassword(input);
    expect(result).toBe("Password length must not exceed 15 characters");
  });

  it('should return true, if password is meets the rubric', () => {
    const input = 'password123';
    var result = verifyPassword(input);
    expect(result).toBe("Password is correct");
  });
});

// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100);
}