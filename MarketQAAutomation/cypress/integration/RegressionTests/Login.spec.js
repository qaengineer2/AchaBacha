describe('Login', function(){
    it('Valid Admin Log In', function(){
        cy.visit('https://app.qa.hkst.io/login')
        cy.get('input[type="email"]').type('admin@admin.com')
        cy.get('input[type="password"]').type('admin')
        cy.get('.submit-button').contains('Log in').should('be.visible').click()
        cy.contains('Funders & Partners',{timeout:10000}).should('be.visible')
        })
    before(function(){
        cy.Login()
        })
    it('Invalid Log In', function(){
        cy.visit('https://app.qa.hkst.io/login')
        cy.get('input[type="email"]').type('blahblah@blah.com')
        cy.get('input[type="password"]').type('blah')
        cy.get('.submit-button').contains('Log in').should('be.visible').click()
        cy.get('.ant-alert-message').should('be.visible').contains('Invalid email or password.')
        })
    it('Google String Test', function(){
        cy.visit('https://google.com/')
        cy.get('input[type="email"]').type('')
        cy.get('input[type="password"]').type('blah')
        cy.get('.submit-button').contains('Log in').should('be.visible').click()
        cy.get('.ant-alert-message').should('be.visible').contains('Invalid email or password.')
        })
})