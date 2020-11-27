Feature: Login to the app

@focus 
Scenario: Opening login page
Given i navigate to the website
When  i enter username
 And  i enter password 
 Then i click on login
