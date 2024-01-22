describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a','Register now').click();
    cy.get('[formcontrolname="email"]').type('thiago@teste')
    cy.get('[formcontrolname="fullName"]').type('thiago moreira')
    cy.get('[formcontrolname="userName"]').type('thiago123')
    cy.get('[formcontrolname="password"]').type('thiago@2024')
    cy.contains('button','Register').click();
    
  })
})
