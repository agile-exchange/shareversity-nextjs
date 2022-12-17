/// <reference types="Cypress" />

// Home button is clickable and takes you to the main page
describe("Home button", () => {
  it("clicking home button takes you to the main page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

// Clicks on sign in button
describe("Login in button", () => {
  it("click login in button", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login").click();
  });
});

// Confirms URL changed to Sign In page
describe("Login in URL", () => {
  it("clicking home login, navigates to sign-in URL", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login").click();
    // URL changes to /login
    cy.url().should("include", "/login");
  });
});

// Clicks on Signup in button
describe("Signup in button", () => {
  it("clicks signup button", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Signup").click();
  });
});

// Clicks on Jobs in button
describe("Jobs button", () => {
  it("clicks jobs button", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Job Opportunities").click();
  });
});

// Clicks on Jobs in button
describe("Search Profile button", () => {
  it("clicks search profile button", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search Profiles").click();
  });
});

// Home button is clickable and takes you to the main page
describe("Home button", () => {
  it("clicking home button takes you to the main page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});