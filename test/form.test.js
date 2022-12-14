import { assert, describe, expect, it } from "vitest";
import { titleCase, headlineLength, validateStringNotEmpty, validateApplicationLink, validateCompensation, 
  validateFormData, validateSchedule, validateLocation, validateApplicationDeadline, validateDuration} from "../utils/validate";

describe("validate job title", () => {
  it("should convert to camel case, when text is entered", () => {
    expect("Data Analyst").toBe(titleCase("data analyst"));
  });
});

describe("validate headline input", () => {
  it("should return 100 characters only, when more than 100 characters are entered", () => {
    const longString = return100a() + return100a();
    const input = headlineLength(longString)
    expect(return100a()).toBe(input);
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

describe("Validate Schedule ", () => {
  it("should return an error message, if schedule is an empty string", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it("should return an error message, if schedule doesn't contain number", () => {
    const input = "hours";
    var result = validateSchedule(input);
    expect(result).toBe("Invalid Schedule, must contain number");
  });

  it("should return a success message, if the entered schedule is valid", () => {
    const input = "8 hours per day";
    var result = validateSchedule(input);
    expect(result).toBe("Valid Schedule entered");
  });
});

describe("Validate Location ", () => {
  it("should return an error message, if Location is an empty string", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it("should return an error message, if Location contain number", () => {
    const input = "1234";
    var result = validateLocation(input);
    expect(result).toBe("Invalid Location, must contain valid Location not number");
  });

  it("should return success mesg, if Location is a valid location", () => {
    const input = "Boston";
    var result = validateLocation(input);
    expect(result).toBe("Valid Location");
  });
});

describe("Validate Skills ", () => {
  it("should return an error message, if skill field is an empty string", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });  
});

describe("Validate Application Deadline ", () => {
  it("should return an error message, if Application Deadline is an empty string", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it("should return an error message, if application deadline is before current date", () => {
    const input = "2022-01-05";
    var result = validateApplicationDeadline(input);
    expect(result).toBe("Invalid Application deadline, deadline can't before todays date");
  });

  it("should return success, if application deadline valid and after current date", () => {
    const input = "2022-12-26";
    var result = validateApplicationDeadline(input);
    expect(result).toBe("Valid Application Deadline");
  });
});

describe("Validate Duration", () => {
  it("should return an error message, if Duration is an empty string", () => {
    const input = "";
    var result = validateStringNotEmpty(input);
    expect(result).toBe("Invalid input - must not be empty");
  });

  it("should return an error message, if Duration is less than a month", () => {
    const input = "20";
    var result = validateDuration(input);
    expect(result).toBe("Please enter a valid input, duration can't be less than a month");
  });

  it("should return a success message, if Duration is valid", () => {
    const input = "2 months";
    var result = validateDuration(input);
    expect(result).toBe("Duration is valid");
  });
});


// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100) + "...";
}