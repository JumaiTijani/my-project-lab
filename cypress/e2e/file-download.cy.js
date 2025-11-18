describe('File-Download', () => {
  it('Download file', () => {
    cy.visit('/download')
    cy.get ('[href="download/users.csv"]').click()
  })
})