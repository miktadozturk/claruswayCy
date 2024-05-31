describe("PracticeTestRecord", () => {
  it("tests PracticeTestRecord", () => {
    cy.viewport(1393, 911);
    cy.visit("https://practice.expandtesting.com/");
    cy.get("#search-input").click();
    cy.get("#search-input").type("web inputs");
    cy.get("#search-button").click();
    cy.get("main a").click();
    cy.location("href").should("eq", "https://practice.expandtesting.com/inputs");
    cy.get("#btn-clear-inputs").click();
    cy.get("#input-number").click();
    cy.get("#input-number").type("5");
    cy.get("#btn-display-inputs").click();
    cy.get("#input-text").click();
    cy.get("#input-text").type("test");
    cy.get("#btn-display-inputs").click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('cypress studio beta record kullanimi', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://practice.expandtesting.com/inputs');
    cy.get('#btn-clear-inputs').click();
    cy.get('#examples-dropdown').click();
    cy.get(':nth-child(1) > .dropdown-item').click();
    cy.get('#examples > :nth-child(2) > :nth-child(2) > .card > .card-body > .card-title > .my-link').click();
    cy.get('.container > .btn').click();
    cy.get('.added-manually').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get(':nth-child(1) > :nth-child(1) > .mb-3 > .form-control').clear('s');
    cy.get(':nth-child(1) > :nth-child(1) > .mb-3 > .form-control').type('sss');
    cy.get(':nth-child(2) > .mb-3 > .form-control').clear('s');
    cy.get(':nth-child(2) > .mb-3 > .form-control').type('sss');
    cy.get('.col-md-12 > .mb-3 > .form-control').click();
    cy.get('.my-4 > .btn').click();
    cy.get(':nth-child(2) > .mb-3 > .form-control').clear('sss@');
    cy.get(':nth-child(2) > .mb-3 > .form-control').type('sss@gmail.com');
    cy.get('.my-4 > .btn').click();
    cy.get('.breadcrumb > :nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
  });
});
//# recorderSourceMap=BCBDBEBFBGBHCJBKBLBMBNBOBPB


