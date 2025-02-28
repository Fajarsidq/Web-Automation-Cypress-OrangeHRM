describe("handle text boxes", () => {
    beforeEach(()=>{
        cy.visit('/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('form').submit()
    })

    it("handle text box", () => {
        cy.contains("Recruitment").click()
        cy.get('.orangehrm-header-container > button').click()

        cy.get("[name='firstName']")
        .clear()
        .type("Naga")
        .should('have.value','Naga')

        cy.get("[name='middleName']")
        .clear()
        .type("bonar")
        .should('have.value','bonar')

        cy.get("[name='lastName']")
        .clear()
        .type("nusantara")
        .should('have.value','nusantara')

    })

    it('validates text boxes', ()=>{
        cy.contains("Recruitment").click()
        cy.get('.orangehrm-header-container > button').click()
        cy.get('form').submit()

        cy.get('.oxd-input-field-error-message').should('have.length',3)

        cy.get('.oxd-input-field-error-message').eq(0).should('have.text','Required')
        cy.get('.oxd-input-field-error-message').eq(1).should('have.text','Required')
        cy.get('.oxd-input-field-error-message').eq(2).should('have.text','Required')

        cy.get("[name='firstName']")
        .clear()
        .type("Naga")
        .should('have.value','Naga')

        cy.get('.oxd-input-field-error-message').should('have.length',2)

        cy.get("[name='lastName']")
        .clear()
        .type("nusantara")
        .should('have.value','nusantara')

        cy.get('.oxd-input-field-error-message').should('have.length',1)



    })

})