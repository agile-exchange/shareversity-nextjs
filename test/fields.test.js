//
//
// This are just sample tests, need to be replaced with real tests
//
//
//

import { assert, describe, expect, it } from "vitest";
import { titleCase, headlineLength } from "../utils/validate";

describe("validate job title", () => {
  it("should have return title case", () => {
    expect("Data Analyst").toBe(titleCase("data analyst"));
  });
});

// write a function that returns the letter "a" 100 times
function return100a() {
  return "a".repeat(100);
}

describe("validate headline input", () => {
  it("should return 100 characters only", () => {
    expect(return100a()).toBe(headlineLength(return100a()));
  });
});

describe("add 2+2", () => {
  it("should return 4", () => {
    expect(2 + 2).toBe(5);
  });
});
