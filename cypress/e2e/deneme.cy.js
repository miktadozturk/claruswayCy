describe('Cypress Farkli Env', () => {
    it('Deneme Test', () => {
        cy.visit('/')
        cy.title().should('contain', 'example')
        cy.wait(5000)
    });
});