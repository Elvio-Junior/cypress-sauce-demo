/// <reference types="cypress" />
import inventoryPage from "../../pages/inventoryPage";
import sauceDemoPage from "../../pages/sauceDemoPage"


describe('Suite Test Login Page', () => {
  let loginPageMessages;

  before(() => {
    cy.fixture('sauceDemo/loginPageMessages.json').then(testData => {
      loginPageMessages = testData;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it('should return error on blank credentials', () => {
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userNameRequired);
  });

  it('should return error on blank user credentials', () => {

    sauceDemoPage.inputCredentials(null, Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userNameRequired);
  });

  it('should return error on blank password credentials', () => {

    sauceDemoPage.inputCredentials(Cypress.env('standardUser'), null);
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.passwordRequired);
  });

  it('should return error on wrong user credentials', () => {

    sauceDemoPage.inputCredentials(Cypress.env('wrongUser'), Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userNamePasswordNotMatch);
  });

  it('should return error on wrong password credentials', () => {

    sauceDemoPage.inputCredentials(Cypress.env('standardUser'), Cypress.env('wrongPassword'));
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userNamePasswordNotMatch);
  });

  it('should return error on wrong user and password credentials', () => {

    sauceDemoPage.inputCredentials(Cypress.env('wrongUser'), Cypress.env('wrongPassword'));
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userNamePasswordNotMatch);
  });

  it('should logon with standard_user', () => {

    sauceDemoPage.inputCredentials(Cypress.env('standardUser'), Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    cy.get(inventoryPage.elements.hamburgerMenu).should('be.visible')
  });

  it('should return error on logon with locked user', () => {

    sauceDemoPage.inputCredentials(Cypress.env('lockedOutUser'), Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    sauceDemoPage.assertErrorMessage(loginPageMessages.userLocked);
  });

  it('should logon with problem_user', () => {

    sauceDemoPage.inputCredentials(Cypress.env('problemUser'), Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    cy.get(inventoryPage.elements.hamburgerMenu).should('be.visible')
    /*cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')
    cy.get('#item_4_img_link > .inventory_item_img')
    cy.get(':nth-child(2) > .inventory_item_description')
    cy.get(':nth-child(1) > .inventory_item_description')
    cy.get('.inventory_list > :nth-child(1)') */
  }); 

  it('should logon with performance_glitch_user', () => {

    sauceDemoPage.inputCredentials(Cypress.env('performanceGlitchUser'), Cypress.env('password'));
    sauceDemoPage.submitCredentials();
    cy.get(inventoryPage.elements.hamburgerMenu).should('be.visible')
  });
});