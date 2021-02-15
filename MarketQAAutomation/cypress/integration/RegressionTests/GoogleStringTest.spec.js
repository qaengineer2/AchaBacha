describe('GoogleStringTest', function(){
    it('Google String Test', function(){
        const dayjs = require('dayjs')
        //var now = dayjs()
        var formatt = dayjs().format('YYYY-MM-DD [at] HH:mm:ss');
        var firstName = 'QAAutoTest'+formatt
        cy.visit('https://google.com/')
        cy.get('input[name="q"]').type(firstName)
        })
})