Cypress.Commands.add("Login", ()=>{
    cy.visit('/login')
        cy.get('input[type="email"]').type('test@dec22.com')
        cy.get('input[type="password"]').type('1')
        cy.get('.submit-button').contains('Log in').should('be.visible').click()
        cy.get('.banner__header > :nth-child(2)').contains('We\'re').should('be.visible')
})