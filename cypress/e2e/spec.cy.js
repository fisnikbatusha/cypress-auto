import loginPagePoPet from "./loginPagePoPet";

const homeURL = Cypress.config().baseUrl;

describe('template spec', () => {
  it('Login test', () => {
    cy.visit(homeURL);
    cy.get('a').contains('Sign In').click();
    cy.get(loginPagePoPet.usernameInputField).clear().type(loginPagePoPet.username);
    cy.get(loginPagePoPet.passwordInputField).clear().type(loginPagePoPet.loginPassword);
    cy.get(loginPagePoPet.loginButton).click();
  })
})