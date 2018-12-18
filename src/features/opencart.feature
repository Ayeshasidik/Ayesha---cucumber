Feature: Open cart application
    As a Tester
    I want to be able to test if an application opened and verify the title and check for invalid credentials.     

    Scenario Outline: Test if the open cart application verifies the error message.
        Given I open the opencart url "<url>"
        And I pause for the 1000ms
        Then the title is  "<title>"
        When I click on elem "<link>" 
        When I enter "<username>" into "userfield"
        And I enter "<password>" into "password-field" 
        When I click on elem "<button>"
        Then I see "<errmsg>" into "Info-label" 
        
        Examples:
            | url | title |link|button|username|password|errmsg|
            | http://www.opencart.com | OpenCart - Open Source Shopping Cart Solution |Login link|Login button|Aisha|passdummy|Login-error-message|