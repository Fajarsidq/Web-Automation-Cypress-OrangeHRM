/// <reference types ="cypress"/>

describe('cypress life cyle hooks', () => {
    //before
    before(()=> {
        cy.log('this life cycle hook will  be execute once')
    })
    //beforeEach
    beforeEach(()=>{
        cy.log('this life cycle hook will be execute before each test case')
    })

    it('test case 1',() => {
        cy.visit('/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('form').submit()
    })

    it('test case 2',() => {
        cy.visit('/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('form').submit()
    })

    //afterEach
    afterEach(()=>{
        cy.log('this life cycle hook will be execute after each test case ')
    })
    //after
    after(()=>{
        cy.log('this life cycle hook will be executed once at the end')
    })
})