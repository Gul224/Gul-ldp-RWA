const { TheatersRounded } = require("@material-ui/icons")
const { cy } = require("date-fns/locale")
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('i navigate to the website', ()=>{
   cy.visit('/')

})
When('i enter username', ()=>{

    cy.get('#username')
    .type('Gul')
})
And('i enter password  ', ()=>{
  
    cy.get('#password')  
    .type('Gul12')
})

Then('i click on login', ()=>{
    cy.get('.MuiButton-label').click()

})