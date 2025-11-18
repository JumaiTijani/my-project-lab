describe('Handling new tab', () => {
  it('Handling tab by substituting the target value', () => {
    cy.visit('/')
    cy.get ('[href="http://elementalselenium.com/"]') .should("be.visible")
    .invoke("attr", "target", "_self").click()
    cy.get('[href="/tips"]>button').should('exist').click()
  })

  it('Handling tab by removing the target attribute', () => {
    cy.visit('/')
    cy.get ('[href="http://elementalselenium.com/"]') .should("be.visible")
    .invoke('removeAttr', 'target').click()
    cy.get('[href="/tips"]>button').should('exist').click()
  })
})