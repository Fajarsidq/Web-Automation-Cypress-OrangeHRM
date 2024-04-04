describe('handle checkbox',() => {
    beforeEach(()=>{
        cy.visit('/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('form').submit()
    })

    it('handle checkbox- scenario 1',() => {
        cy.contains("Recruitment").click()
        cy.get('.orangehrm-header-container > button').click()

        cy.get("[type='checkbox']").check({force:true}).should('be.checked')
    })
})