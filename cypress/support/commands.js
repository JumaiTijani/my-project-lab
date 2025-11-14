// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAnyElement', (element) => { 
    cy.get(element).should('be.visible').click()
})

Cypress.Commands.add('insertAnyText', (inputField, input) => { 
    cy.get(inputField).should('be.visible').type(input)
})

Cypress.Commands.add('verifyElementText', (element, text) => { 
    cy.get(element).should('be.visible').and('contain.text', text)
})

Cypress.Commands.add('selectFromDropdown', (element, text) => { 
    cy.get (element).should('be.visible').select(text)
})

Cypress.Commands.add('clickElementThatContains', (element, text) => { 
    cy.get(element).contains(text).should('be.visible').and('exist').click()
})


Cypress.Commands.add('selectAnyDate', (dateSelector, monthSelector, yearSelector, daySelector, month, year, text) => {
  cy.get(dateSelector).click()
  cy.get(monthSelector).select(month)
  cy.get(yearSelector).select(year)
  cy.get(daySelector).contains(text).click()
})


