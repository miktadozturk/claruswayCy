/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homepage/homepage";
import login from "../../support/pageObjects/login/login";

describe('Page Object Kullanimina bir Ornek', () => {
    it('Login testi', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        
        // Anasayfaya erisim ve url baslik dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')

        // Login kismi 
        login.fillUsername('Test')
        login.fillPassword('123456')
        login.loginBtn('Login')

        // Error mesaji
        login.errorMsg('Test')
    });
});
