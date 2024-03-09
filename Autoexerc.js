describe('', () => {
    it('4- Discussion auto', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="signup-name"]').type("H")
        cy.get('[data-qa="signup-email"]').type("sexysousou@hotmail.net")
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include','signup')
    });
});