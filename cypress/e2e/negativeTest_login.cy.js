/// <reference types = "cypress"/>


describe('User Login', () =>{
  beforeEach(() => {    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','index.php/auth/login')
  })

      it('Verify user login with invalid registered credentials',() => {
      cy.fixture("user").then( user => {

        const invalidUsername = user.invalidUsername
        const invalidPassword = user.invalidPassword

      cy.get('input[name="username"]').type(user.invalidUsername)
      cy.get('input[name="password"]').type(user.invalidPassword)
      cy.get('.oxd-button').click()
      cy.contains('Invalid credentials').check
      
      })
  })

    it('Verify user login without Username',() => {
      cy.fixture("user").then( user => {

        const password = user.password

      cy.get('input[name="password"]').type(user.password)
      cy.get('.oxd-button').click()
      cy.get('.oxd-text').should('contain.text','Required')
    })
  })

    it('Verify user login without Password',() => {
      cy.fixture("user").then( user => {

        const username = user.username

      cy.get('input[name="username"]').type(user.username)
      cy.get('.oxd-button').click()
      cy.get('.oxd-text').should('contain.text','Required')
    })
  })

  it('Verify user login without Password and Username',() => {
    cy.get('.oxd-button').click()
    cy.get('.oxd-text').should('contain.text','Required')

})
})