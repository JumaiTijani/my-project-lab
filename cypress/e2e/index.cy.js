describe('template spec', () => {
  it('mima sign up', () => {
    cy.visit('/')
    cy.get('.Header2_header__nav__btn__wRKfY>div:nth-child(2)>button')
    .should('be.visible').click()
    //cy.get('button').contains('Sign up').should('be.visible').and('exist').click()

    /* cy.get('.Login_logintext__center__DbD-L>h3').invoke('text').then((header)=>{
      expect(header).to.include('Sign Up') */
    cy.get('.Login_logintext__center__DbD-L>h3').should('contain.text', 'Sign Up')
    cy.get('#fullname').should('exist').type('Emma Miller')
    cy.get('#fullname').invoke('val').then((fullname) => {
  expect(fullname).to.equal('Emma Miller')
})

    //cy.get('input#fullname').clear().type('Emma Miller')
    //cy.get('#fullname').invoke('val', 'Emma Miller')
    cy.get('#businessname').should('be.visible').type('Ample Ventures')
    cy.get('#businessname').invoke('val').then((businessname) => {
  expect(businessname).to.equal('Ample Ventures')
  })

    cy.get('#businessemail').should('exist').type('ample2@sharklasers.com')
    cy.get('#businessemail').invoke('val').then((businessname) => {
  expect(businessname).to.equal('ample2@sharklasers.com')
  })

    cy.get('#businessphonenumber').should('exist').type('2349110202999')
    cy.get('#businessRegNum').should('exist').type('RC 0000001')
    cy.get("button[type='button']").should('be.visible').click()
    

    cy.get('.Login_rightside__back__W5kq5>div:nth-child(2)>div').invoke('text').then((header)=>{
      expect(header).to.contain('Go Back')
      })
      //.Login_rightside__back__W5kq5>div:nth-child(2)>div

    cy.get('#website').should('exist').type('www.ampleventures.com')
    cy.get('#instagramHandle').should('exist').type('@ampleventures')
    cy.get('#twitterHandle').should('exist').type('@ampleventures')
    cy.get('.Login_rightside__nhkW7>div:nth-child(2)>div:nth-child(1)>div:nth-child(4)>div:nth-child(2)')
    .should('be.visible').click()
    //.Login_rightside__nhkW7>div:nth-child(2)>div:nth-child(1)>div:nth-child(4)>div:nth-child(2)
    cy.get("input[placeholder='Search list']").should('exist').type('others')
    cy.get(".MimaDropdown_select__options__xLi7K").should('be.visible').click()
    cy.get("div[placeholder='Others']").invoke('text').then((dropdown)=>{
      expect(dropdown).to.contain('Others')
      })

    //cy.get().should('exist').type('')
    cy.get('.IconButton_icon__cla1w').should('be.visible').click()
    cy.get('#password').should('exist').type('Secret123!')
    cy.get('.IconButton_icon__cla1w').should('be.visible').click()
    //.IconButton_icon__cla1w
    cy.get('#password').should('have.value', 'Secret123!')

    //.Login_accent__Q9jN6
    cy.get('.Login_accent__Q9jN6').should('be.visible').click()
    //#referredBy
    cy.get('#referredBy').should('exist').type('Beilly')

    //button[type='submit']
    cy.get("button[type='submit']").should('be.visible').click()

    //h2[class='Onboarding_left__h2__w+P+z']
    cy.get("h2[class='Onboarding_left__h2__w+P+z']").invoke('text').then((welcomeMessage)=>{
      expect(welcomeMessage).to.contain('Thank you for Signing up with Mima.')
      })

    

  })
})