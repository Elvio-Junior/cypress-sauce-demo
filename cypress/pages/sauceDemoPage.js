/// <reference types="cypress" />

class SauceDemoPage {
    elements = {
        userName: '[data-test="username"]',
        userPassword: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        messageError: '[data-test="error"]'
    };

    inputCredentials(userName, userPassword) {
        
        if (userName) {
            cy.get(this.elements.userName)
                .clear()
                .type(userName);
        } 

        if (userPassword) {
            cy.get(this.elements.userPassword)
                .clear()
                .type(userPassword);
        } 

        return this;
    };

    submitCredentials() {
        
        cy.get(this.elements.loginButton).click();
        return this;
    };

    assertErrorMessage(messageError) {
        cy.get(this.elements.messageError)
        .should('be.visible')
        .and('have.text', messageError);
    };
}

module.exports = new SauceDemoPage();
