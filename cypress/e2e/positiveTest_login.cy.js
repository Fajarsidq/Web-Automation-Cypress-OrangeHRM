/// <reference types = "cypress"/>


describe('User Login', () =>{
  beforeEach(() => {    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','index.php/auth/login')
  })

      it('Verify user login with valid registered credentials',() => {
      cy.fixture("user").then( user => {
          const username = user.username
          const password = user.password

      cy.get('input[name="username"]').type(user.username)
      cy.get('input[name="password"]').type(user.password)
      cy.get('.oxd-button').click()
      
      cy.get('h6').should('contain.text','Dashboard')
      })
})
})