import loginPagePoPet from "./loginPagePoPet";

const homeURL = Cypress.config().baseUrl;

describe('Testimi i Loginit', () => {
  it('Testimi i Loginit', () => {
    cy.visit(homeURL);
    cy.get('a').contains('Sign In').click();
    cy.get(loginPagePoPet.usernameInputField).clear().type(loginPagePoPet.username);
    cy.get(loginPagePoPet.passwordInputField).clear().type(loginPagePoPet.loginPassword);
    cy.get(loginPagePoPet.loginButton).click();
  })
})