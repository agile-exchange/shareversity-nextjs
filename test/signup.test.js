import { assert, describe, expect, it } from "vitest";
import { validateEmail, validateEduEmailAccount, verifyPassword, validateLoginEmail, validateLoginPassword} from "../utils/validate";

  describe("validate the students email", () => {

    it('should return false, if email is empty', () => {
      const input = '';
      var result = validateEmail(input);
      expect(result).toBe(false);
    });

    it('should return false, if email is not valid', () => {
      const input = 'test@test@gmail.com';
      var result = validateEmail(input);
      expect(result).toBe(false);
    });
  
    it('should return false, if email doesnt contain @', () => {
      const input = 'testgmail.com.edu';
      var result = validateEmail(input);
      expect(result).toBe(false);
    });
  
    it('should return false, if email is not an edu email', () => {
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
    it('should return error message, if password is empty', () => {
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
  
    it('should return true, if passwor1d is meets the requirements', () => {
      const input = 'password123';
      var result = verifyPassword(input);
      expect(result).toBe("Password is correct");
    });
  });

  describe("validate login email", () => {
    it('should return an error message, if email is empty', () => {
      const input = '';
      var result = validateLoginEmail(input);
      expect(result).toBe("Email cant be empty");
    });

    it('should return an error message, if a long string of blanks is provided', () => {
        const input = '     ';
        var result = validateLoginEmail(input);
        expect(result).toBe("Email cant be empty");
      });

    it('should return an error message, if a long string of blanks is provided', () => {
        const input = 'test@edu.com';
        var result = validateLoginEmail(input);
        expect(result).toBe("true");
    });
  });

  describe("validate login password", () => {
    it('should return an error message, if password is empty', () => {
      const input = '';
      var result = validateLoginPassword(input);
      expect(result).toBe("Password cant be empty");
    });

    it('should return an error message, if password is empty', () => {
        const input = '    ';
        var result = validateLoginPassword(input);
        expect(result).toBe("Password cant be empty");
    });

    it('should return true, if password is valid', () => {
        const input = 'validPassword';
        var result = validateLoginPassword(input);
        expect(result).toBe("true");
    });
});