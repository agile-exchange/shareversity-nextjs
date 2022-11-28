import { assert, describe, expect, it } from "vitest";
import { validateEmail, validateEduEmailAccount, verifyPassword} from "../utils/validate";

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
  
    it('should return true, if passwor1d is meets the rubric', () => {
      const input = 'password123';
      var result = verifyPassword(input);
      expect(result).toBe("Password is correct");
    });
  });