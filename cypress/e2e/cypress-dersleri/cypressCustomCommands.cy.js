/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homepage/homepage";

describe('Cypress Custom Commands Kullanimi-1', () => {
    it('Ornek Kullanim', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        // Anasayfaya erisim ve url baslik dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')
        cy.login()
    });

    it('Ornek Kullanim 2', () => {       
        cy.navigatePage()
        cy.verifyUrlAndTitle('automationtesting', 'My Account – Automation Practice Site')
        cy.login3('deneme123@test.com', 'Deneme@12345', 'Login')
        cy.logout()
    });


    it('Ornek Kullanim 3', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        // Anasayfaya erisim ve url baslik dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')
        cy.login2()
    });
});



























