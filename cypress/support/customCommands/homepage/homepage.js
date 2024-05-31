import homepage from "../../pageObjects/homepage/homepage"

Cypress.Commands.add('navigatePage', () => {
    // Anasayfaya erisim
    cy.on('uncaught:exception', (err, runnable) => { return false })
    homepage.navigate()
})

Cypress.Commands.add('verifyUrlAndTitle', (url, title) => {
    // Url ve title dogrulama
    homepage.verifyUrl(url)
    homepage.verifyTitle(title)
})