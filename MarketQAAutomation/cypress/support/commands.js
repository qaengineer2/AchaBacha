Cypress.Commands.add("Login", ()=>{
    cy.visit('/login')
        cy.get('input[type="email"]').type('test@Jan5.com')
        cy.get('input[type="password"]').type('1')
        cy.get('.submit-button').contains('Log in').should('be.visible').click()
        cy.get(':nth-child(1) > .ant-row > [style="flex: 1 1 auto;"]').contains('Matches').should('be.visible')
})