describe('Single select drop-down', () => {
  it('select by text', () => {
    cy.visit('/')
    cy.get ('[href="/ingredients/select"]').scrollIntoView()
    cy.get ('[href="/ingredients/select"]').click()
    cy.get ('#spices-select-single').select('Ginger')
  })

  it('select by value', () => {
    cy.visit('/')
    cy.get ('[href="/ingredients/select"]').scrollIntoView()
    cy.get ('[href="/ingredients/select"]').click()
    cy.get ('#spices-select-single').select('paprika')
  })
})