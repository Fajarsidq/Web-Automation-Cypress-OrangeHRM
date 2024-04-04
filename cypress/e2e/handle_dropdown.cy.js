describe("handle dropdown", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('form').submit()
    })

    it("handle dropdown value", () => {
    cy.contains('Recruitment').click()
    cy.get(".orangehrm-header-container > button").click()
    
    cy.get(".oxd-select-text").click()

    cy.get(".oxd-select-text-input").should('be.visible')
    cy.contains('Senior QA Lead').click()

    cy.get(".oxd-select-text").click()

    cy.get(".oxd-select-text-input").should('be.visible')
    cy.contains('Junior Account Assistant').click()
    






})
})