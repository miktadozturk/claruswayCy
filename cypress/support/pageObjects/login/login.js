class Login {
    fillUsername(username) {
        cy.get('input#username').should('be.empty').and('be.visible').type(username, { log: false })
    }

    fillPassword(password) {
        cy.get('input#password').should('be.empty').and('be.visible').type(password, { log: false })
    }

    loginBtn(value) {
        cy.get('input[name="login"]').should('be.visible').and('have.value', value).click()
    }

    errorMsg(error) {
        cy.get('.woocommerce-error').should('be.visible').and('contain', error)
    }
}

export default new Login()