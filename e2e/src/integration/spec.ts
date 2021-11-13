describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('my-app app is running!')
  })
})
