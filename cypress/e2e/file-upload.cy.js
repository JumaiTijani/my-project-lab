describe('File-Upload', () => {
  it('Upload file directly from cypress', () => {
    cy.visit('/upload')
    cy.get ('#file-upload').selectFile('users.csv')
    cy.get (".button").click()
   
  })

  it('Upload file ', () => {
    cy.visit('/upload')
    cy.get ('#file-upload').selectFile('users.csv')
    cy.get (".button").click()
   
  })
})