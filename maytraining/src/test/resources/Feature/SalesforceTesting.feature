Feature:  Verify the Login Functionality
  
  
  Scenario: Verify Login with Valid Username and clear Password - Login Error Message
    Given User is on "HomePage"
    When User Enter value into the textbox "Username" "hema@tek.com"
    When User Enter value into the textbox "password" ""
   Then User Click on the Button "Login"
   And verify Text "error" "Please enter your password."
  
  
  Scenario: Verify Login with Valid Username and valid Password - Login to Salesforce
    Given User is on "HomePage"
    When User Enter value into the textbox "Username" "hema@tek.com"
    When User Enter value into the textbox "password" "kannama123"
   Then User Click on the Button "Login"



Scenario: Check RememberMe-testcase 3

Given User is on "SignInPage" 
When User Enter value into the textbox "Username" "hema123@tek.com"
When User Enter value into the textbox "Password" "kannama123"
And User Click on the Button "RememberMe"
Then User Click on the Button "Login"
And Verify title "Home Page ~ Salesforce - Developer Edition"



Scenario: Verify Forgot Password - Test Case - 4A
    Given User is on "Home Page"
    When User Enter value into the textbox "Username" "hema@tek.com"
         Then User Click on the Button "ForgotPassword"
   Given User is on "ForgotPasswordPage"
   When User Enter value into the textbox "UsernameForgotPassword" "hema@tek.com"
   Then User Click on the Button "Continue"
   Given User is on "CheckYourEmailPage"
 And Verify title "Check Your Email | Salesforce"
     And User Click on the Button "ReturnToLogin"
    Given User is on "SignInPage"
    
    Scenario: Forgot Password - TestCase 4B
    Given User is on "Home Page"
    When User Enter value into the textbox "Username" "123@tek.com"
   When User Enter value into the textbox "Password" "123"
   Then User Click on the Button "Login"
   And verify Text "WrongUnPwdError" "Please check your username and password. If you still can't log in, contact your Salesforce administrator."
   
