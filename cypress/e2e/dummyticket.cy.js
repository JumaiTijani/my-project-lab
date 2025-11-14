//fakerEN_NG
import { fakerEN_NG as faker, fakerEN_NG, fakerYO_NG } from '@faker-js/faker';

const firstName = faker.person.firstName('female')
const lastName = faker.person.lastName()
const fullName = `${firstName} ${lastName}`
const fakerDate = faker.date.birthdate({ min: 1950, max: 2005, mode: 'year' })
const month = fakerDate.toLocaleString('default', { month: 'short' })
const year = fakerDate.getFullYear().toString()                      
const day = fakerDate.getDate().toString()
const originCity = faker.location.city()
const destinationCity = faker.location.city()
const phone = faker.phone.number({ style: 'international' })
const billingmail = faker.internet.email({ firstName: firstName, provider: 'mailinator.com' })
const address1 = faker.location.streetAddress()
const address2 = faker.location.secondaryAddress()
const city = fakerEN_NG.location.city()

let data
describe('Buy ticket', () => {
  before('load elements', () => {
    cy.fixture('buydummyticket').then(sel=>{
      data = sel
    })
  })
  it('dummy ticket and hotel', () => {
    cy.visit('/')
    cy.clickAnyElement(data.buyticket)
    cy.clickAnyElement(data.dummyticketandhotel)
    //Passenger details:
    cy.insertAnyText(data.firstname, firstName)
    cy.insertAnyText(data.lastname, lastName)
    cy.selectAnyDate(data.dob, data.selectmonth, data.selectyear, data.clickday, month, year, day)
    cy.clickAnyElement(data.sex)
    //Travel Details:
    cy.clickAnyElement(data.triptype)
    cy.insertAnyText(data.origincity, originCity)
    cy.insertAnyText(data.destinationcity, destinationCity)
    cy.selectAnyDate(data.departuredate, data.selectmonth, data.selectyear, data.clickday, "Dec", "2025", "18")
    cy.selectAnyDate(data.returndate, data.selectmonth, data.selectyear, data.clickday, "Dec", "2025", "31")
    //Delivery options:
    cy.selectAnyDate(data.appointmentdate, data.selectmonth, data.selectyear, data.clickday, "Nov", "2025", "17")
    cy.clickAnyElement(data.deliverymethod)
    //Billing Details:
    cy.insertAnyText(data.billname, fullName)
    cy.insertAnyText(data.billingphone, phone)
    cy.insertAnyText(data.billingemail, billingmail)
    cy.insertAnyText(data.billingaddress1, address1)
    cy.insertAnyText(data.billingaddress2, address2)
    cy.insertAnyText(data.billingcity, city)
    cy.clickAnyElement(data.clickdropdown)
    cy.insertAnyText(data.searchstate, "OYO")
    cy.clickAnyElement(data.selectstate)
    cy.clickAnyElement(data.placeorder)

  })
})

