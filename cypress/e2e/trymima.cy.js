describe('template spec', () => {
  it('mima sign up', () => {
    //lauch trymima and click on signup
    cy.visit('/')
    cy.get('.Header2_header__nav__btn__wRKfY>div:nth-child(2)>button')
    .should('be.visible').click()
    //assert sign up page 
    cy.get('.Login_logintext__center__DbD-L>h3').invoke('text').then((header)=>{
      expect(header).to.include('Sign Up')
      })
    
      //input value into the text fields
    cy.get('#fullname').should('exist').type('Emma Miller')
    cy.get('#businessname').should('be.visible').type('Ample Ventures')
    cy.get('#businessemail').should('exist').type('ample2@sharklasers.com')
    cy.get('#businessphonenumber').should('exist').type('2349110202999')
    cy.get('#businessRegNum').should('exist').type('RC 0000001')
    cy.get("button[type='button']").should('be.visible').click()

    //assertion for 'go-back' on the next page
    cy.get('.Login_rightside__back__W5kq5>div:nth-child(2)>div').invoke('text').then((header)=>{
      expect(header).to.contain('Go Back')
      })
    
    //input value into the text fields
    cy.get('#website').should('exist').type('www.ampleventures.com')
    cy.get('#instagramHandle').should('exist').type('@ampleventures')
    cy.get('#twitterHandle').should('exist').type('@ampleventures')

    //select an option from the drop down menu and assert selected option
    cy.get('.Login_rightside__nhkW7>div:nth-child(2)>div:nth-child(1)>div:nth-child(4)>div:nth-child(2)')
    .should('be.visible').click()
    cy.get("input[placeholder='Search list']").should('exist').type('others')
    cy.get(".MimaDropdown_select__options__xLi7K").should('be.visible').click()
    cy.get("div[placeholder='Others']").invoke('text').then((dropdown)=>{
      expect(dropdown).to.contain('Others')
      })
    //Input Password
    cy.get('.IconButton_icon__cla1w').should('be.visible').click()
    cy.get('#password').should('exist').type('Secret123!')
    cy.get('.IconButton_icon__cla1w').should('be.visible').click()
    //assert password input value
    cy.get('#password').should('have.value', 'Secret123!')

    //input referral
    cy.get('.Login_accent__Q9jN6').should('be.visible').click()
    cy.get('#referredBy').should('exist').type('Beilly')

    //click signup
    cy.get("button[type='submit']").should('be.visible').click()

    //Assert success page
    cy.get("h2[class='Onboarding_left__h2__w+P+z']").invoke('text').then((welcomeMessage)=>{
      expect(welcomeMessage).to.contain('Thank you for Signing up with Mima.')
      })

    

  })
})